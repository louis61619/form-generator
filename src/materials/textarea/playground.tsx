import { PlaygroundCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Input, Textarea } from '@mantine/core';
import { CommonConfig, CommonInputWrapper } from '../common';

export const Playground: PlaygroundCompProps<CompProps> = ({ uuid, configValue }) => {
  return (
    <CommonInputWrapper {...configValue}>
      <Textarea placeholder={configValue.placeholder} rows={configValue.rows} />
    </CommonInputWrapper>
  );
};
