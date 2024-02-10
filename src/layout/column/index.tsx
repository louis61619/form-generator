import { Icon } from '@iconify/react';
import Column from '@iconify/icons-material-symbols/view-column-outline-sharp';
import { Playground } from './playground';
import { View } from './view';
import { CompInfo } from '../../types';

export const compInfo: CompInfo = {
  icon: <Icon icon={Column} />,
  type: 'column',
  name: 'column',
  playground: Playground,
  view: View,
};
