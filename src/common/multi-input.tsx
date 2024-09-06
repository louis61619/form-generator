import { Button, Input } from '@mantine/core';

import styled from '@emotion/styled';
import { DeleteIcon } from './icons';

const MultiInputWrapper = styled.div`
  .-option {
    display: flex;
    margin-bottom: 4px;
    align-items: center;

    .mantine-Input-wrapper {
      flex: 1;
    }

    .-del {
      font-size: 20px;
      padding: 0 4px;
    }
  }
`;

export const MultiInput: React.FC<{
  value?: string[];
  onUpdate?: (value: string[]) => void;
}> = ({ value = [''], onUpdate }) => {
  return (
    <MultiInputWrapper>
      {value.map((option, index) => {
        return (
          <div className="-option" key={index}>
            <Input
              value={option}
              onChange={(e) => {
                const newValue = [...value];
                newValue[index] = e.currentTarget.value;
                onUpdate?.(newValue);
              }}
            />
            <DeleteIcon
              className="-del"
              onClick={() => {
                if (value.length === 1) return;
                const newValue = [...value];
                newValue.splice(index, 1);
                onUpdate?.(newValue);
              }}
            />
          </div>
        );
      })}
      <Button
        size="compact-sm"
        onClick={() => {
          onUpdate?.([...value, '']);
        }}
      >
        + Add
      </Button>
    </MultiInputWrapper>
  );
};
