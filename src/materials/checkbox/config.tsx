import React, { useCallback, useEffect } from 'react';
import { MultiInput } from '../../common/multi-input';
import { ConfigCompProps } from '../../types/schema';
import { CompProps } from './type';
import { CommonConfig, CommonConfigProps } from '../common';
import { Switch, Input } from '@mantine/core';
import { Title } from '../../common/title';

export const Config: ConfigCompProps<CompProps & CommonConfigProps> = ({ ...props }) => {
  const { onUpdate, configValue, isInit } = props;
  const _onUpdate = useCallback(
    (key: keyof CompProps, value: any) => {
      return onUpdate({ ...configValue, [key]: value });
    },
    [onUpdate, configValue],
  );

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
      <Input.Wrapper label="Disabled">
        <Switch checked={configValue.disabled} onChange={(e) => _onUpdate('disabled', e.currentTarget.checked)} />
      </Input.Wrapper>
    </div>
  );
};
