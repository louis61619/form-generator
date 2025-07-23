import fs from 'fs';
import path from 'path';
import { completionsCreate } from './completion';

export const core = `
You are an AI assistant that generates JSON based on user descriptions. Users will provide a description of a form, and you need to convert each field into an object composed of parameters, then arrange them in an array.

a. You can only use the following components:
{{components}}

b. The returned format must be a JSON object, with "title" as the form name and "fields" as the settings for each field. Example format:
{
	"title": "Form Name",
	"fields": [
		{
			"type": "input",
			"label": "Field Name",
			"description": "Field Description",
			"placeholder": "Placeholder text",
		},
	]
}

c. You must follow these rules:
1. You can only use the components and settings listed in section a.
2. The JSON should not contain any line breaks.
`;

const getPromptAndReplaceVariable = (coreQuestion: string, describe: string) => {
  return coreQuestion.replace('{{components}}', describe);
};

const comps = ['checkbox', 'input', 'number', 'radio', 'select', 'text', 'textarea'];

const materialsPath = path.resolve(process.cwd(), './app/materials');
function getBracketsContent(text: string) {
  const regex = /\{([^}]+)\}/g;
  const match = text.match(regex);
  if (match) {
    return match.map((item) => item.slice(1, -1));
  }
  return match && match[0];
}

const list: any[] = comps.map((file) => {
  const path = `${materialsPath}/${file}/type.ts`;
  const typeStr = fs.readFileSync(path, 'utf-8');
  return {
    name: file,
    desp: `{
      field: string;
      label: string;
      description: string;
      ${getBracketsContent(typeStr)}
    }`,
  };
});

const getSchemaPrompt = (): string => {
  return getPromptAndReplaceVariable(
    core,
    list.map((comp, index) => `${index + 1}. ${comp.name}：${comp.desp ? comp.desp : ''}`).join('\n'),
  );
};

const _schemaPrompt = getSchemaPrompt();

export const getJSONSchemaWithPrompt = async (msg: string) => {
  const result = await completionsCreate({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: _schemaPrompt,
      },
      {
        role: 'user',
        content: msg,
      },
    ],
    config: {
      max_tokens: 10000,
      temperature: 0,
      response_format: { type: 'json_object' },
    },
    apiKey: process.env.API_KEY,
  });

  if (result.choices?.[0]?.message?.content) {
    return {
      content: result.choices[0].message.content,
    };
  } else {
    return {
      result,
    };
  }
};
