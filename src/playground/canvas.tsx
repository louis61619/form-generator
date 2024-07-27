import React from 'react';
import styled from '@emotion/styled';
import { Droppable } from '../common/dnd';
// import { Droppable } from 'react-beautiful-dnd';
import { usePlaygroundContext } from './context';
import { RenderSchema } from './render';
import Column from './column';
import { Block } from './block';

const CanvasWrapper = styled.div`
  /* border: 1px solid; */
  /* background-color: aqua; */
  flex: 1;
  overflow-y: scroll;
  /* width: 100px; */

  & > div {
    min-height: 100%;
  }
`;

export const Canvas = () => {
  const { schema } = usePlaygroundContext();

  return (
    // <CanvasWrapper>
    //   <Droppable droppableId="canvas">
    //     {(provided, snapshot) => {
    //       return (
    //         <div ref={provided.innerRef} {...provided.droppableProps}>
    //           {/* <RenderSchema schema={schema} /> */}
    //           {provided.placeholder}
    //         </div>
    //       );
    //     }}
    //   </Droppable>
    // </CanvasWrapper>

    <CanvasWrapper>
      <Droppable droppableId={'canvas'}>
        {(provided) => {
          return (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {/* <Column id="1" />
              <Column id="2" /> */}
              <RenderSchema schema={schema} />
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </CanvasWrapper>
  );
};
