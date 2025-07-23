import { ViewProps, ConfigCompProps } from '@l-lib/low-code-engine';

export type ViewCompProps<D = object> = React.ComponentType<
  ViewProps<D> & {
    inputProps?: any;
  }
>;

export type CompInfoType<D = object> = {
  prefix?: JSX.Element;
  name: string;
  group?: string;
  type: string;
  view: ViewCompProps<D>;
  config: ConfigCompProps<D>;
  desp?: string;
};
