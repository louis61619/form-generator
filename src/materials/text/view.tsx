import { PlaygroundCompProps, ViewCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Input } from '@mantine/core';
import { useField } from '@mantine/form';
import { CommonConfig } from '../common';

export const View: ViewCompProps<CompProps> = ({ configValue }) => {
  return (
    <Input.Wrapper {...configValue}>
      <Input {...configValue} />
    </Input.Wrapper>
  );
};
