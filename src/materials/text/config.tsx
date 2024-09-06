import { ConfigCompProps } from '../../types/schema';
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
        <Input onChange={(e) => _onUpdate('content', e.currentTarget.value)}></Input>
      </Input.Wrapper>
    </div>
  );
};
