import { Switch, Input, ActionIcon } from '@mantine/core';

import { ConfigCompProps } from '../../types/schema';
import { CompProps } from './type';
import { CommonConfig, CommonConfigProps } from '../common';

import { Title } from '../../common/title';
import { MultiInput } from '../../common/multi-input';

export const Config: ConfigCompProps<CompProps & CommonConfigProps> = ({ ...props }) => {
  const { onUpdate, configValue } = props;
  const _onUpdate = (key: keyof CompProps, value: any) => {
    return onUpdate({ ...configValue, [key]: value });
  };

  return (
    <div>
      <CommonConfig {...props} />
      <Title>Props</Title>
      <Input.Wrapper label="Options">
        <MultiInput value={configValue.options} onUpdate={(v) => _onUpdate('options', v)} />
      </Input.Wrapper>
      <Input.Wrapper label="Disabled">
        <Switch checked={configValue.disabled} onChange={(e) => _onUpdate('disabled', e.currentTarget.checked)} />
      </Input.Wrapper>
    </div>
  );
};
