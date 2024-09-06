import { PlaygroundCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Input, Checkbox, Group } from '@mantine/core';
import { CommonConfig, CommonInputWrapper } from '../common';

export const Playground: PlaygroundCompProps<CompProps> = ({ uuid, configValue }) => {
  const { options, disabled } = configValue;

  return (
    <CommonInputWrapper {...configValue}>
      <Checkbox.Group>
        <Group mt="xs">
          {options?.map((option, index) => (
            <Checkbox disabled={disabled} key={index} label={option} value={index}></Checkbox>
          ))}
        </Group>
      </Checkbox.Group>
    </CommonInputWrapper>
  );
};
