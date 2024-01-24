import styled from '@emotion/styled';
import React, { forwardRef, useRef } from 'react';
import { usePlaygroundContext } from './context';
import { Droppable, Draggable } from './dnd';
import { CompInfo } from '../types';
import { DraggableStateSnapshot } from 'react-beautiful-dnd';

const ToolbarWrapper = styled.div`
  border-right: 1px solid ${(props) => props.theme.color.border};
  width: 250px;
`;

const IconBlockWrapper = styled.div`
  .-icon {
    width: 20px;
    height: 20px;
    margin-bottom: 4px;
  }

  .-txt {
    font-size: 14px;
    white-space: nowrap;
    font-weight: normal;
  }
`;

const IconBlock = forwardRef<any, { comp: CompInfo; style?: any; snapshot?: DraggableStateSnapshot }>(
  ({ comp, snapshot, ...props }, ref) => {
    const { icon, name } = comp;

    let style = props.style;
    if (snapshot && snapshot.isDropAnimating && snapshot.draggingOver) {
      style = {
        ...style,
        transitionDuration: `0.0000001s`,
        opacity: 0,
      };
    }

    return (
      <IconBlockWrapper ref={ref} {...props} style={style}>
        {icon}
        <span className="-txt">{name}</span>
      </IconBlockWrapper>
    );
  },
);

export const ToolBar = () => {
  const { list } = usePlaygroundContext();

  return (
    <>
      <ToolbarWrapper>
        {list.map((item, index) => {
          return (
            <div>
              <div>{item.groupName}</div>
              <div>
                {item.components.map((comp, index) => {
                  const { type } = comp;

                  return (
                    <Droppable
                      // type='toolbar'
                      droppableId={'[bar]' + type}
                      key={type}
                      isDropDisabled={true}
                    >
                      {(provided, snapshot) => (
                        <div className="-icon-btn" ref={provided.innerRef}>
                          <Draggable key={type} draggableId={type} index={index}>
                            {(provided, snapshot) => {
                              return (
                                <>
                                  <IconBlock
                                    comp={comp}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    snapshot={snapshot}
                                    ref={provided.innerRef}
                                  />
                                  {snapshot.isDragging && <IconBlock comp={comp} />}
                                </>
                              );
                            }}
                          </Draggable>
                          <div style={{ position: 'absolute' }}>{provided.placeholder}</div>
                        </div>
                      )}
                    </Droppable>
                  );
                })}
              </div>
            </div>
          );
        })}
      </ToolbarWrapper>
    </>
  );
};
