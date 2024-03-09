import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';
import { Draggable } from '../common/dnd';
import { DragIcon } from '../common/drag-btn';

type Props = {
  children: React.ReactNode;
  style?: CSSProperties;
  uuid: string;
  index: number;
};

const BlockWrapper = styled.div`
  width: 100%;
  /* min-height: 300px; */
  border: 1px solid;
`;

export const Block = React.forwardRef<HTMLDivElement, Props>(({ children, uuid, index, ...otherProps }, ref) => {
  return (
    <Draggable draggableId={uuid} index={index}>
      {(provided) => (
        <BlockWrapper ref={provided.innerRef} {...provided.draggableProps}>
          {children}
          <DragIcon {...provided.dragHandleProps} />
        </BlockWrapper>
      )}
    </Draggable>
  );
});
