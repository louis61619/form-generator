import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import { CompInfoType, Schema } from '../types';
import { genUUID } from '../utils/gen-uuid';

type ContextType = {
  schema: Schema;
  setSchema: ((value: Schema) => void) | undefined;
  list: CompInfoType[];
  compsMap: { [key: string]: CompInfoType };
};

const reorder = (list: string[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const addPropertiesToContent = (content: Schema, type: string) => {
  if (!content.properties) {
    content.properties = {};
    content.order = [];
  }
  const compKey = genUUID(type);
  const newContent = { type };
  content.properties[compKey] = newContent;
  return compKey;
};

export const PlaygroundContext = createContext<ContextType>({
  schema: { type: 'canvas' },
  setSchema: () => {},
  list: [],
  compsMap: {},
});

export const PlaygroundProvider: React.FC<Omit<ContextType, 'compsMap'> & { children: React.ReactNode }> = ({
  children,
  schema,
  setSchema,
  list,
  ...props
}) => {
  const compsMap: { [key: string]: CompInfoType } = useMemo(() => {
    return list.reduce((pre, cur) => {
      return {
        ...pre,
        [cur.type]: cur,
      };
    }, {});
  }, [list]);

  return (
    <PlaygroundContext.Provider
      value={{
        schema,
        setSchema,
        list,
        compsMap,
        ...props,
      }}
    >
      <DragDropContext
        onDragEnd={(res) => {
          const { source, destination, draggableId } = res;
          console.log(res);

          if (!destination) {
            return;
          }
          // 如何做到在不同layout下實時預覽 要處理的應該就壓到的寬度而已
          // draggableId 為欠套的路徑

          if (/^\[bar\]/.test(source.droppableId) && destination?.droppableId) {
            // from toolbar
            const content = schema;
            const compKey = addPropertiesToContent(content, draggableId);
            content.order?.splice(destination.index, 0, compKey);
          }

          console.log(schema);

          setSchema?.({ ...schema });
        }}
      >
        {children}
      </DragDropContext>
    </PlaygroundContext.Provider>
  );
};

export const usePlaygroundContext = () => {
  const context = useContext(PlaygroundContext);

  return context;
};
