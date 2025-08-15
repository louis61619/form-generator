import { getJSONSchemaWithPrompt } from './prompt';
import { NextRequest, NextResponse } from 'next/server';
import { Schema } from '@l-lib/low-code-engine';
import { genUUID } from '../../utils/gen-uuid';

export const runtime = 'nodejs';

const resultFieldsJSONToSchema = (result: string) => {
  const _result = JSON.parse(result);
  const schema: Schema = {
    type: 'top',
  };
  schema.properties = {};
  schema.order = [];

  for (const field of _result.fields) {
    const fieldId = genUUID(field.type);
    const type = field.type;
    delete field.type;
    schema.properties[fieldId] = {
      type,
      configValue: field,
    };
    schema.order.push(fieldId);
  }

  return schema;
};

export async function POST(request: NextRequest) {
  try {
    const { msg, apiKey } = await request.json();
    const { content, result } = await getJSONSchemaWithPrompt(msg, apiKey);
    if (!content) {
      return NextResponse.json(result, {
        status: 400,
        statusText: 'Bad Request',
      });
    }
    return NextResponse.json({
      schema: resultFieldsJSONToSchema(content),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: `${error}`,
      },
      {
        status: 500,
        statusText: 'Internal Server Error',
      },
    );
  }
}

export async function GET(request: NextRequest) {
  return {
    hasKey: !!process.env.API_KEY,
  };
}
