import React from 'react';

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

export type CompInfoType = {
  icon: JSX.Element;
  name: string;
  group?: string;
  type: string;
  playground: React.ComponentType;
  view: React.ComponentType;
};
