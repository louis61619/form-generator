import { PlaygroundCompProps, ViewCompProps } from '../../types/schema';
import { CompProps } from './type';
import { Group, Input, Radio } from '@mantine/core';
import { CommonConfig, CommonInputWrapper } from '../common';

const a = ['1', '2', '3', '4', '5'];

export const View: ViewCompProps<CompProps> = ({ configValue }) => {
  const { options, disabled } = configValue;

  console.log('-----');

  return (
    <CommonInputWrapper {...configValue}>
      <Radio.Group
        onChange={(v) => {
          console.log(v);
        }}
      >
        <Group>
          {options?.map((option, index) => <Radio disabled={disabled} key={option} label={option} value={index} />)}
        </Group>
      </Radio.Group>
    </CommonInputWrapper>
  );
};
