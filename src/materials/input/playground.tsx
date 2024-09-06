import { PlaygroundCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Input } from '@mantine/core';
import { CommonConfig, CommonInputWrapper } from '../common';

export const Playground: PlaygroundCompProps<CompProps> = ({ uuid, configValue }) => {
  const { label } = configValue;

  return (
    <CommonInputWrapper {...configValue}>
      <Input {...configValue} />
    </CommonInputWrapper>
  );
};
