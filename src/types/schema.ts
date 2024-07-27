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

/**
 * @desc config type use in schema, type must be only
 */
export type CompConfigType = {
  icon: JSX.Element;
  name: string;
  group?: string;
  type: string;
  playground: React.ComponentType<PlaygroundProps>;
  view: React.ComponentType;
};

export type PlaygroundCompProps = React.FC<PlaygroundProps>;
