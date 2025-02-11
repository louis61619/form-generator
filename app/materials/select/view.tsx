import { ViewCompProps } from '../../type';
import { CompProps } from './type';
import { Select } from '@mantine/core';
import { useField } from '@mantine/form';
import { CommonInputWrapper } from '../common';

export const View: ViewCompProps<CompProps> = ({ configValue, inputProps }) => {
  const { options, placeholder, ...otherConfig } = configValue;

  return (
    <CommonInputWrapper {...otherConfig}>
      <Select data={options} placeholder={placeholder} {...inputProps} />
    </CommonInputWrapper>
  );
};
