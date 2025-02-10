import React, { useState } from 'react';
import { Schema } from '@l-lib/low-code-engine';
import { CompInfoType } from '../type';
import { list } from '../materials';
import styled from '@emotion/styled';
import { useForm } from '@mantine/form';

const compMap = list.reduce(
  (pre, item) => {
    if (item.type) {
      pre[item.type] = item;
    }
    return pre;
  },
  {} as { [key: string]: CompInfoType },
);

const FormWrapper = styled.form`
  .mantine-InputWrapper-root {
    margin-bottom: 8px;
  }
  .mantine-InputWrapper-label {
    margin-bottom: 4px;
  }
  .mantine-InputWrapper-description {
    margin-bottom: 4px;
  }
`;

export const RenderSchema: React.FC<{ schema: Schema; onChange?: (values: any) => void }> = ({ schema, onChange }) => {
  const [values, setValues] = useState<{ [key: string]: any }>({});

  const form = useForm({
    mode: 'controlled',
    onValuesChange: (values) => {
      setValues(values);
      onChange?.(values);
    },
  });

  return (
    <div>
      <FormWrapper>
        {schema.order?.map((key) => {
          const field = schema.properties?.[key];
          if (field === undefined) return null;
          const Comp = compMap[field.type].view;
          const inputAction = form.getInputProps(field.configValue?.field || key);

          return (
            <Comp
              key={key}
              uuid={key}
              configValue={field.configValue || {}}
              inputProps={{
                ...inputAction,
                value: values[key] || undefined,
              }}
            />
          );
        })}
      </FormWrapper>
    </div>
  );
};
