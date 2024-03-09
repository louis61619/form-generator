import { Icon } from '@iconify/react';
import Inline from '@iconify/icons-material-symbols/menu';
import { Playground } from './playground';
import { View } from './view';
import { CompInfoType } from '../../types';

// inline flex layout
export const compInfo: CompInfoType = {
  icon: <Icon icon={Inline} />,
  type: 'inline',
  name: 'inline',
  group: 'layout',
  playground: Playground,
  view: View,
};
