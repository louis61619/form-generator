import { PlaygroundCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Input, NumberInput } from '@mantine/core';
import { CommonConfig, CommonInputWrapper } from '../common';

export const Playground: PlaygroundCompProps<CompProps> = ({ uuid, configValue }) => {
  const { disabled } = configValue;

  return (
    <CommonInputWrapper {...configValue}>
      <NumberInput disabled={disabled} />
    </CommonInputWrapper>
  );
};
