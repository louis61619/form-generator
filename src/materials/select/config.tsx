import { useCallback, useEffect } from 'react';
import { Switch, Input, ActionIcon } from '@mantine/core';

import { ConfigCompProps } from '../../types/schema';
import { CompProps } from './type';
import { CommonConfig, CommonConfigProps } from '../common';

import { Title } from '../../common/title';
import { MultiInput } from '../../common/multi-input';

export const Config: ConfigCompProps<CompProps & CommonConfigProps> = ({ ...props }) => {
  const { onUpdate, configValue, isInit } = props;
  const _onUpdate = useCallback(
    (key: keyof CompProps, value: any) => {
      return onUpdate({ ...configValue, [key]: value });
    },
    [onUpdate, configValue],
  );

  console.log(props);

  useEffect(() => {
    if (isInit) {
      _onUpdate('options', ['Option 1', 'Option 2', 'Option 3']);
    }
  }, [isInit, _onUpdate]);

  return (
    <div>
      <CommonConfig {...props} />
      <Title>Props</Title>
      <Input.Wrapper label="Options">
        <MultiInput value={configValue.options} onUpdate={(v) => _onUpdate('options', v)} />
      </Input.Wrapper>
      <Input.Wrapper label="Placeholder">
        <Input value={configValue.placeholder} onChange={(e) => _onUpdate('placeholder', e.currentTarget.value)} />
      </Input.Wrapper>
      <Input.Wrapper label="Disabled">
        <Switch checked={configValue.disabled} onChange={(e) => _onUpdate('disabled', e.currentTarget.checked)} />
      </Input.Wrapper>
    </div>
  );
};
