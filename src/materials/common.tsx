import { Title } from '../common/title';
import { ConfigCompProps } from '../types/schema';
import { Input, Badge } from '@mantine/core';

const size = 'small';

export type CommonConfigProps = {
  field: string;
  label: string;
};

export const TypeFeiled: React.FC<{ type: string }> = ({ type }) => {
  return (
    <>
      <Input.Wrapper label="Type">
        <div>
          <Badge>{type}</Badge>
        </div>
      </Input.Wrapper>
    </>
  );
};

export const CommonConfig: ConfigCompProps<CommonConfigProps> = ({ ...props }) => {
  const { onUpdate, configValue, type } = props;
  const { field, label } = configValue;

  return (
    <>
      <TypeFeiled type={type} />
      <Title>Basis</Title>
      <Input.Wrapper label="Field">
        <Input
          value={field}
          onChange={(e) => {
            onUpdate({
              ...configValue,
              field: e.target.value,
            });
          }}
        />
      </Input.Wrapper>
      <Input.Wrapper label="Title">
        <Input
          value={label}
          onChange={(e) => {
            onUpdate({
              ...configValue,
              label: e.target.value,
            });
          }}
        />
      </Input.Wrapper>
    </>
  );
};

type InputWrapperProps = React.ComponentProps<typeof Input.Wrapper>;

export const CommonInputWrapper: React.FC<InputWrapperProps> = ({ children, ...props }) => {
  return <Input.Wrapper {...props}>{children}</Input.Wrapper>;
};
