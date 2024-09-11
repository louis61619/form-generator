import { PlaygroundCompProps, ViewCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Input, Text } from '@mantine/core';
import { useField } from '@mantine/form';
import { CommonConfig, CommonInputWrapper } from '../common';

export const View: ViewCompProps<CompProps> = ({ configValue }) => {
  const { content } = configValue;

  return (
    <CommonInputWrapper {...configValue}>
      <Text {...configValue}>{content}</Text>
    </CommonInputWrapper>
  );
};
