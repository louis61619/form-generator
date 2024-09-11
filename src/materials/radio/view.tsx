import { PlaygroundCompProps, ViewCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Group, Input, Radio } from '@mantine/core';
import { CommonConfig, CommonInputWrapper } from '../common';

export const View: ViewCompProps<CompProps> = ({ configValue, inputProps }) => {
  const { options, disabled } = configValue;

  return (
    <CommonInputWrapper {...configValue}>
      <Radio.Group {...inputProps}>
        <Group>
          {options?.map((option, index) => <Radio disabled={disabled} key={option} label={option} value={option} />)}
        </Group>
      </Radio.Group>
    </CommonInputWrapper>
  );
};
