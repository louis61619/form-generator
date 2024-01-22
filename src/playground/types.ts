export type Schema = {
  type: string;
  title?: string;
  description?: string;
  properties?: Properties;
  order?: (keyof Properties)[];
};

export type Properties = {
  [key: string]: Schema;
};
