import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import { Schema } from './types';

type ContextType = {
  schema: Schema;
  setSchema: (value: Schema) => void;
  components: any[];
};

export const PlaygroundContext = createContext<ContextType>({
  schema: { type: 'object' },
  setSchema: () => {},
  components: [],
});

export const PlaygroundProvider: React.FC<ContextType & { children: React.ReactNode }> = ({
  children,
  schema,
  setSchema,
  components,
  ...props
}) => {
  return (
    <PlaygroundContext.Provider
      value={{
        schema,
        setSchema,
        components,
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
