import { View } from './view';
import { CompInfoType } from '../../type';
import { Config } from './config';
import { CompProps } from './type';

export const compInfo: CompInfoType<CompProps> = {
  type: 'textarea',
  name: 'textarea',
  group: 'form',
  view: View,
  config: Config,
};
