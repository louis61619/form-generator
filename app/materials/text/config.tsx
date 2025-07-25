import { ConfigCompProps } from '@l-lib/low-code-engine';
import { CompProps } from './type';
import { TypeFeild, CommonConfigProps } from '../common';
import { Switch, Input } from '@mantine/core';
import { Title } from '../../common/title';

export const Config: ConfigCompProps<CompProps & CommonConfigProps> = ({ ...props }) => {
  const { onUpdate, configValue } = props;
  const _onUpdate = (key: keyof CompProps, value: any) => {
    return onUpdate({ ...configValue, [key]: value });
  };

  return (
    <div>
      <TypeFeild {...props} />
      <Title>Props</Title>
      <Input.Wrapper label="Content">
        <Input value={configValue.content} onChange={(e) => _onUpdate('content', e.currentTarget.value)}></Input>
      </Input.Wrapper>
    </div>
  );
};
