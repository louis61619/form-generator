import { PlaygroundCompProps, ViewCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Textarea } from '@mantine/core';
import { useField } from '@mantine/form';
import { CommonConfig, CommonInputWrapper } from '../common';
import { CommonProps } from '@mui/material/OverridableComponent';

export const View: ViewCompProps<CompProps & CommonProps> = ({ configValue }) => {
  const field = useField({
    initialValue: '',
    validate: (value) => (value.trim().length < 2 ? 'Value is too short' : null),
    validateOnBlur: true,
  });

  return (
    <CommonInputWrapper {...configValue}>
      <Textarea {...field.getInputProps()} {...configValue} />
    </CommonInputWrapper>
  );
};
