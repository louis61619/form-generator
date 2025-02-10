import { ViewCompProps } from '../../type';
import { CompProps } from './type';
import { Input } from '@mantine/core';
import { useField } from '@mantine/form';
import { CommonConfig, CommonInputWrapper } from '../common';

export const View: ViewCompProps<CompProps> = ({ configValue, inputProps }) => {
  const { label } = configValue;

  return (
    <CommonInputWrapper {...configValue}>
      <Input {...configValue} {...inputProps} />
    </CommonInputWrapper>
  );
};
