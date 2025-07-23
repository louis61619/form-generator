export const completionsCreate = async ({
  model = 'gpt-4o',
  messages = [],
  config = {
    temperature: 0.7,
    max_tokens: 1000,
  },
  apiKey = '',
}: {
  model?: string;
  messages?: Array<{ role: string; content: string }>;
  config?: {
    temperature?: number;
    max_tokens?: number;
    response_format?: string | { type: string; [key: string]: any };
  };
  apiKey?: string;
}) => {
  const data = {
    model,
    messages,
    ...config,
  };

  const resp = await fetch(`https://api.openai.com/v1/chat/completions`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });

  const result = await resp.json();

  return result;
};
