import { Schema } from '../types/schema';

export function getKeepKeyToIdMap(schema: Schema) {
  if (!schema) return {};
  const keepIdMap: { [key: string]: Schema } = {};

  function traversalSchema(schema: Schema) {
    if (!schema.order) return;
    for (let i = 0; i < schema.order.length; i++) {
      const key = schema.order[i];
      let content = schema.properties?.[key];
      if (content) {
        // const newContent = { id: key, parent: schema, ...content };
        keepIdMap[key] = content;
        traversalSchema(content);
      }
    }
  }
  traversalSchema(schema);

  return keepIdMap;
}
