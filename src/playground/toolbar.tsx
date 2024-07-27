import styled from '@emotion/styled';
import React, { forwardRef, useRef } from 'react';
import { usePlaygroundContext } from './context';
import { Droppable, Draggable } from '../common/dnd';
import { CompConfigType } from '../types/schema';
import { DraggableStateSnapshot } from 'react-beautiful-dnd';

const ToolbarWrapper = styled.div`
  border-right: 1px solid ${(props) => props.theme.color.border};
  width: 250px;
  padding: 0 10px;
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px; */

  .-title {
    padding: 4px;
    margin-bottom: 12px;
    border-bottom: 1px solid ${(props) => props.theme.color.border};
  }

  .-btns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
  }

  .-icon-btn {
    cursor: grab;
  }
`;

const IconBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.border};
  padding: 8px 0;
  background-color: #fff;
  padding: 4px;

  .-icon {
    width: 20px;
    height: 20px;
  }

  .-txt {
    /* font-size: 14px; */
    margin-left: 4px;
    white-space: nowrap;
    font-weight: normal;
  }
`;

const IconBlock = forwardRef<
  any,
  { comp: CompConfigType; style?: React.CSSProperties; snapshot?: DraggableStateSnapshot }
>(({ comp, snapshot, ...props }, ref) => {
  const { icon, name } = comp;

  // let style = props.style;
  // if (snapshot && snapshot.isDropAnimating && snapshot.draggingOver) {
  //   style = {
  //     ...style,
  //     transitionDuration: `0.0000001s`,
  //     opacity: 0,
  //   };
  // }

  return (
    <IconBlockWrapper ref={ref} {...props}>
      {icon}
      <span className="-txt">{name}</span>
    </IconBlockWrapper>
  );
});

type GroupComponentsListType = { groupName: string; components: CompConfigType[] }[];
export const ToolBar = () => {
  const { list: componentList } = usePlaygroundContext();
  const list = componentList.reduce((pre: GroupComponentsListType, cur) => {
    const _list = [...pre];
    const listItem = _list.find((item) => item.groupName === cur.group);
    if (listItem) {
      listItem.components.push(cur);
    } else {
      _list.push({
        groupName: cur.group || 'other',
        components: [cur],
      });
    }
    return _list;
  }, []);

  return (
    <>
      <ToolbarWrapper>
        {list.map((item, index) => {
          // const { type } = comp;

          return (
            // <Droppable droppableId={'[bar]' + type} key={'[bar]' + type} isDropDisabled={true}>
            //   {(provided, snapshot) => (
            //     <div className="-icon-btn" ref={provided.innerRef}>
            //       <Draggable key={type} draggableId={type} index={index}>
            //         {(provided, snapshot) => {
            //           return (
            //             <>
            //               <IconBlock
            //                 comp={comp}
            //                 {...provided.draggableProps}
            //                 {...provided.dragHandleProps}
            //                 snapshot={snapshot}
            //                 ref={provided.innerRef}
            //               />
            //               {snapshot.isDragging && <IconBlock comp={comp} />}
            //             </>
            //           );
            //         }}
            //       </Draggable>
            //       <div style={{ position: 'absolute' }}>{provided.placeholder}</div>
            //     </div>
            //   )}
            // </Droppable>
            <div key={index}>
              <div className="-title">{item.groupName}</div>
              <div>
                <div className="-btns">
                  {item.components.map((comp, index) => {
                    const { type } = comp;

                    return (
                      <Droppable droppableId={'[bar]' + type} key={'[bar]' + type} isDropDisabled={true}>
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
            </div>
          );
        })}
      </ToolbarWrapper>
    </>
  );
};
