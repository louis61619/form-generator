import { View } from './view';
import { CompInfoType } from '../../type';
import { Config } from './config';
import { CompProps } from './type';

export const compInfo: CompInfoType<CompProps> = {
  // icon: <Icon icon={Column} />,
  type: 'checkbox',
  name: 'checkbox',
  group: 'form',
  view: View,
  config: Config,
};
