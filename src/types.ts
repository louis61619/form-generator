import React from 'react';
import { Icon } from '@iconify/react';

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

export type CompInfo = {
  icon: JSX.Element;
  name: string;
  type: string;
  playground: React.ComponentType;
  view: React.ComponentType;
};
