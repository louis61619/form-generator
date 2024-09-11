import { PlaygroundCompProps, ViewCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Checkbox, Group } from '@mantine/core';
import { useField } from '@mantine/form';
import { CommonInputWrapper } from '../common';

export const View: ViewCompProps<CompProps> = ({ configValue }) => {
  const { options, disabled } = configValue;

  return (
    <CommonInputWrapper {...configValue}>
      <Checkbox.Group>
        <Group>
          {options?.map((option, index) => (
            <Checkbox disabled={disabled} key={index} label={option} value={index}></Checkbox>
          ))}
        </Group>
      </Checkbox.Group>
    </CommonInputWrapper>
  );
};
