import { PlaygroundCompProps, ViewCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Textarea } from '@mantine/core';
import { useField } from '@mantine/form';
import { CommonConfig, CommonInputWrapper } from '../common';

export const View: ViewCompProps<CompProps> = ({ configValue, inputProps }) => {
  return (
    <CommonInputWrapper {...configValue}>
      <Textarea placeholder={configValue.placeholder} rows={configValue.rows} {...inputProps} />
    </CommonInputWrapper>
  );
};
