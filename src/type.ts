import { ViewProps, ConfigCompProps } from '@l-lib/low-code-engine';

export type ViewCompProps<D = {}> = React.ComponentType<
  ViewProps<D> & {
    inputProps?: any;
  }
>;

export type CompInfoType<D = {}> = {
  prefix?: JSX.Element;
  name: string;
  group?: string;
  type: string;
  view: ViewCompProps<D>;
  config: ConfigCompProps<D>;
  desp?: string;
};
