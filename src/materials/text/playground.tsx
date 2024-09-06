import { PlaygroundCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Text } from '@mantine/core';
import { CommonConfig, CommonInputWrapper } from '../common';

export const Playground: PlaygroundCompProps<CompProps> = ({ uuid, configValue }) => {
  const { content } = configValue;

  return (
    <CommonInputWrapper {...configValue}>
      <Text {...configValue}>{content}</Text>
    </CommonInputWrapper>
  );
};
