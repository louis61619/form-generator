import { ConfigCompProps } from '@l-lib/low-code-engine';
import { CompProps } from './type';
import { CommonConfig, CommonConfigProps } from '../common';
import { Switch, Input, NumberInput } from '@mantine/core';
import { Title } from '../../common/title';

export const Config: ConfigCompProps<CompProps & CommonConfigProps> = ({ ...props }) => {
  const { onUpdate, configValue } = props;
  const _onUpdate = (key: keyof CompProps, value: any) => {
    return onUpdate({ ...configValue, [key]: value });
  };

  return (
    <div>
      <CommonConfig {...props} />
      <Title>Props</Title>
      <Input.Wrapper label="Disabled">
        <Switch checked={configValue.disabled} onChange={(e) => _onUpdate('disabled', e.currentTarget.checked)} />
      </Input.Wrapper>
      <Input.Wrapper label="Placeholder">
        <Input value={configValue.placeholder} onChange={(e) => _onUpdate('placeholder', e.currentTarget.value)} />
      </Input.Wrapper>
      <Input.Wrapper label="Row">
        <NumberInput value={configValue.rows} onChange={(e) => _onUpdate('rows', e)} />
      </Input.Wrapper>
    </div>
  );
};
