import { PlaygroundCompProps, ViewCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Input } from '@mantine/core';
import { useField } from '@mantine/form';
import { CommonConfig } from '../common';

export const View: ViewCompProps<CompProps> = ({ configValue }) => {
  const { label } = configValue;

  const field = useField({
    initialValue: '',
    validate: (value) => (value.trim().length < 2 ? 'Value is too short' : null),
    validateOnBlur: true,
  });

  return (
    <Input.Wrapper {...configValue}>
      <Input {...field.getInputProps()} {...configValue} />
    </Input.Wrapper>
  );
};
