import { Icon } from '@iconify/react';
import Column from '@iconify/icons-material-symbols/view-column-outline-sharp';
import { Playground } from './playground';
import { View } from './view';
import { CompConfigType } from '../../types/schema';

export const compInfo: CompConfigType = {
  icon: <Icon icon={Column} />,
  type: 'column',
  name: 'column',
  group: 'basic',
  playground: Playground,
  view: View,
};
