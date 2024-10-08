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
  configValue: Partial<D>;
};

export type ConfigProps<D> = {
  onUpdate: (data: Partial<D>) => void;
  configValue: Partial<D>;
  type: string;
  isInit: boolean;
  uuid: string;
};

export type ViewProps<D> = {
  configValue: Partial<D>;
  inputProps: {
    onChange: any;
    value?: any;
    defaultValue?: any;
    checked?: any;
    error?: any;
    onFocus?: any;
    onBlur?: any;
  };
};

export type ConfigCompProps<D = {}> = React.ComponentType<ConfigProps<D>>;

export type PlaygroundCompProps<D = {}> = React.ComponentType<PlaygroundProps<D>>;

export type ViewCompProps<D = {}> = React.ComponentType<ViewProps<D>>;

/**
 * @desc config type use in schema, type must be only
 */
export type CompInfoType<D = {}> = {
  icon?: JSX.Element;
  name: string;
  group?: string;
  type: string;
  playground: PlaygroundCompProps<D>;
  view: ViewCompProps<D>;
  config: ConfigCompProps<D>;
};
