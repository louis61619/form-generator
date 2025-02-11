import { View } from './view';
import { CompInfoType } from '../../type';
import { Config } from './config';
import { CompProps } from './type';

export const compInfo: CompInfoType<CompProps> = {
  type: 'number',
  name: 'number',
  group: 'form',
  view: View,
  config: Config,
};
