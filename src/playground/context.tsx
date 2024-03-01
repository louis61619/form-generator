import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import { CompInfoType, Schema } from '../types';

type ContextType = {
  schema: Schema;
  setSchema: ((value: Schema) => void) | undefined;
  list: CompInfoType[];
};

export const PlaygroundContext = createContext<ContextType>({
  schema: { type: 'object' },
  setSchema: () => {},
  list: [],
});

export const PlaygroundProvider: React.FC<ContextType & { children: React.ReactNode }> = ({
  children,
  schema,
  setSchema,
  list,
  ...props
}) => {
  return (
    <PlaygroundContext.Provider
      value={{
        schema,
        setSchema,
        list,
        ...props,
      }}
    >
      <DragDropContext
        onDragEnd={(res) => {
          const { source, destination, draggableId } = res;

          if (!destination) {
            return;
          }
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
