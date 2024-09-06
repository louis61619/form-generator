import { PlaygroundCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Group, Input, Radio } from '@mantine/core';
import { CommonConfig, CommonInputWrapper } from '../common';

export const Playground: PlaygroundCompProps<CompProps> = ({ uuid, configValue }) => {
  const { options, disabled } = configValue;

  return (
    <CommonInputWrapper {...configValue}>
      <Radio.Group>
        <Group mt="xs">
          {options?.map((option, index) => (
            <Radio disabled={disabled} key={index} label={option} value={index}></Radio>
          ))}
        </Group>
      </Radio.Group>
    </CommonInputWrapper>
  );
};
