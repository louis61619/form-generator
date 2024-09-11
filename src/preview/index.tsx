import React from 'react';
import { CompInfoType, Schema } from '../types/schema';
import { list } from '../playground/list';
import styled from '@emotion/styled';

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
    margin-bottom: 16px;
  }
  .mantine-InputWrapper-label {
    margin-bottom: 4px;
  }
`;

export const Preview: React.FC<{ schema: Schema }> = ({ schema }) => {
  return (
    <div>
      <FormWrapper>
        {schema.order?.map((key) => {
          const field = schema.properties?.[key];
          if (field === undefined) return null;
          const Comp = compMap[field.type].view;
          return <Comp key={key} configValue={field.configValue || {}} />;
        })}
      </FormWrapper>
    </div>
  );
};
