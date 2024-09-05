import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';
import { Draggable } from '../common/dnd';
import { DragIcon, DeleteIcon } from '../common/icons';
import { usePlaygroundContext } from './context';
import { theme } from '../common/theme';

type Props = {
  children: React.ReactNode;
  style?: CSSProperties;
  uuid: string;
  index: number;
};

const BlockWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 30px;

  background-color: #fff;
  outline: 1px solid ${(props) => props.theme.color.border};

  &:hover {
    z-index: 1;
    outline: 1px solid ${(props) => props.theme.color.primary};
  }

  &.active {
    outline: 2px solid ${(props) => props.theme.color.primary};
    z-index: 2;
  }

  .-tool-bar {
    position: absolute;
    top: 0;
    right: 0;

    & > div {
      background-color: ${(props) => props.theme.color.primary};
      color: #fff;
      cursor: pointer;
      display: inline-block;
      padding: 2px 2px 0;
      margin-left: 2px;
      font-size: 14px;
    }
  }
`;

const ToolBar: React.FC<{
  style?: React.CSSProperties;
  className?: string;
  draggableProps?: any;
  [key: string]: any;
}> = ({ draggableProps, ...props }) => {
  return (
    <div {...props}>
      <DeleteIcon style={{ backgroundColor: theme.color.dangerouns }} onClick={() => {}} />
      <DragIcon {...draggableProps} />
    </div>
  );
};

export const Block = React.forwardRef<HTMLDivElement, Props>(({ children, uuid, index, ...otherProps }, ref) => {
  const { currentId, setCurrentId } = usePlaygroundContext();

  return (
    <Draggable draggableId={uuid} index={index}>
      {(provided) => (
        <BlockWrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={currentId === uuid ? 'active' : ''}
          onClick={() => {
            setCurrentId(uuid);
          }}
        >
          {children}
          <ToolBar
            className="-tool-bar"
            style={{ display: currentId === uuid ? '' : 'none' }}
            draggableProps={provided.dragHandleProps}
          />
        </BlockWrapper>
      )}
    </Draggable>
  );
});
