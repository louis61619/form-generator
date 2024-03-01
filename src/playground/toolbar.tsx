import styled from '@emotion/styled';
import React, { forwardRef, useRef } from 'react';
import { usePlaygroundContext } from './context';
import { Droppable, Draggable } from './dnd';
import { CompInfoType } from '../types';
import { DraggableStateSnapshot } from 'react-beautiful-dnd';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Icon } from '@iconify/react';
import ArrowDown from '@iconify/icons-material-symbols/keyboard-arrow-down';

const ToolbarWrapper = styled.div`
  border-right: 1px solid ${(props) => props.theme.color.border};
  width: 250px;

  .-icon-btn {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
  }
`;

const IconBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.color.border};
  padding: 8px 0;
  background-color: #fff;

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
  { comp: CompInfoType; style?: React.CSSProperties; snapshot?: DraggableStateSnapshot }
>(({ comp, snapshot, ...props }, ref) => {
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
});

type GroupComponentsListType = { groupName: string; components: CompInfoType[] }[];
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
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<Icon icon={ArrowDown} />}
                aria-controls={`panel-content-${index}`}
                id={`panel-header-${index}`}
              >
                {item.groupName}
              </AccordionSummary>
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
          );
        })}
      </ToolbarWrapper>
    </>
  );
};
