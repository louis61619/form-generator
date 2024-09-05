import { PlaygroundCompProps } from '../../types/schema';
import { CompProps } from './type';
import Box from '@mui/material/Box';
import { CommonConfig } from '../common';

export const Playground: PlaygroundCompProps<CompProps> = ({ uuid, configValue }) => {
  const { value } = configValue;

  return (
    <div>
    </div>
  );
};
