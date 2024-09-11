import { PlaygroundCompProps, ViewCompProps } from '../../types/schema';
import { CompProps } from './type';
import { NumberInput } from '@mantine/core';
import { useField } from '@mantine/form';
import { CommonInputWrapper } from '../common';

export const View: ViewCompProps<CompProps> = ({ configValue, inputProps }) => {
  const { disabled } = configValue;

  return (
    <CommonInputWrapper {...configValue}>
      <NumberInput disabled={disabled} {...inputProps} />
    </CommonInputWrapper>
  );
};
