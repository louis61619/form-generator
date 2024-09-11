import { PlaygroundCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Select } from '@mantine/core';
import { CommonConfig, CommonInputWrapper } from '../common';

export const Playground: PlaygroundCompProps<CompProps> = ({ uuid, configValue }) => {
  const { options, placeholder } = configValue;

  return (
    <CommonInputWrapper {...configValue}>
      <Select  placeholder={placeholder} />
    </CommonInputWrapper>
  );
};
