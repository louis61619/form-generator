import React from 'react';

export type Schema = {
  type: string;
  title?: string;
  description?: string;
  properties?: Properties;
  order?: string[];
  configValue?: any;
} & { [key: string]: any };

export type Properties = {
  [key: string]: Schema;
};

export type PlaygroundProps<D> = {
  uuid: string;
  configValue: D;
};

export type ConfigProps<D> = {
  onUpdate: (data: D) => void;
  configValue: D;
};

export type CompConfigProps<D = {}> = React.ComponentType<ConfigProps<D>>;

export type PlaygroundCompProps<D = {}> = React.ComponentType<PlaygroundProps<D>>;

/**
 * @desc config type use in schema, type must be only
 */
export type CompInfoType<D = {}> = {
  icon: JSX.Element;
  name: string;
  group?: string;
  type: string;
  playground: PlaygroundCompProps<D>;
  view: React.ComponentType<{ configValue: D }>;
  config: CompConfigProps<D>;
};
