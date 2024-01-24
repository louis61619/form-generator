import React from 'react';
import styled from '@emotion/styled';
import { Droppable } from './dnd';
import { usePlaygroundContext } from './context';
// import { RenderSchema } from './render';

const CanvasWrapper = styled.div`
  /* border: 1px solid; */
  flex: 1;
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
