import { Icon } from '@iconify/react';
import Column from '@iconify/icons-material-symbols/view-column-outline-sharp';
import { Playground } from './playground';
import { View } from './view';
import { CompInfoType } from '../../types/schema';
import { Config } from './config';
import { CompProps } from './type';

export const compInfo: CompInfoType<CompProps> = {
  icon: <Icon icon={Column} />,
  type: 'radio',
  name: 'radio',
  group: 'basic',
  playground: Playground,
  view: View,
  config: Config,
};
