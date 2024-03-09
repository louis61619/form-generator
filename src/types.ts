import React from 'react';

export type Schema = {
  type: string;
  title?: string;
  description?: string;
  properties?: Properties;
  order?: string[];
} & { [key: string]: any };

export type Properties = {
  [key: string]: Schema;
};

export type PlaygroundProps = {
  uuid: string;
};

export type CompInfoType = {
  icon: JSX.Element;
  name: string;
  group?: string;
  type: string;
  playground: React.ComponentType<PlaygroundProps>;
  view: React.ComponentType;
};
