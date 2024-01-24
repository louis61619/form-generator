import React from 'react';
import styled from '@emotion/styled';
import { Droppable } from './dnd';
import { usePlaygroundContext } from './context';
// import { RenderSchema } from './render';

const CanvasWrapper = styled.div`
  border-radius: 8px;
  padding: 24px;
  background-color: #f2f8ff;
  width: calc(100% - 180px);

  & > .-title {
    color: #292929;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .-bot {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Canvas = () => {
  const { schema } = usePlaygroundContext();

  return (
    <Droppable droppableId="canvas" type="column">
      {(provided, snapshot) => {
        return (
          <CanvasWrapper ref={provided.innerRef}>
            {/* <RenderSchema schema={schema} /> */}
            {provided.placeholder}
          </CanvasWrapper>
        );
      }}
    </Droppable>
  );
};
