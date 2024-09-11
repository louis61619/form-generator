import { PlaygroundCompProps, ViewCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Select } from '@mantine/core';
import { useField } from '@mantine/form';
import { CommonInputWrapper } from '../common';

export const View: ViewCompProps<CompProps> = ({ configValue }) => {
  const { options } = configValue;

  console.log(options);

  return (
    <CommonInputWrapper {...configValue}>
      <Select data={options} {...configValue} />
    </CommonInputWrapper>
  );
};
