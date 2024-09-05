import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import { CompInfoType, Schema } from '../types/schema';
import { genUUID } from '../utils/gen-uuid';
import { getKeepKeyToIdMap } from '../utils/handle-schema';

type PlaygroundProviderProps = {
  schema: Schema;
  setSchema: ((value: Schema) => void) | undefined;
  list: CompInfoType[];
};

type ContextType = {
  compsMap: { [key: string]: CompInfoType };
  currentId: string;
  setCurrentId: (id: string) => void;
  keyToContentMap: { [key: string]: Schema };
  updateConfigValueById: (value: any) => void;
} & PlaygroundProviderProps;

const reorder = (list: string[] = [], startIndex: number, endIndex: number) => {
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
  schema: { type: 'object' },
  setSchema: () => {},
  list: [],
  compsMap: {},
  currentId: '',
  setCurrentId: () => {},
  keyToContentMap: {},
  updateConfigValueById: () => {},
});

export const PlaygroundProvider: React.FC<PlaygroundProviderProps & { children: React.ReactNode }> = ({
  children,
  schema,
  setSchema,
  list,
  ...props
}) => {
  const [currentId, setCurrentId] = useState<string>('');

  const compsMap: { [key: string]: CompInfoType } = useMemo(() => {
    return list.reduce((pre, cur) => {
      return {
        ...pre,
        [cur.type]: cur,
      };
    }, {});
  }, [list]);

  const keyToContentMap = useMemo(() => {
    return getKeepKeyToIdMap(schema);
  }, [schema]);

  const updateConfigValueById = useCallback(
    (value: any) => {
      keyToContentMap[currentId].configValue = value;
      setSchema?.({ ...schema });
    },
    [currentId, keyToContentMap, schema, setSchema],
  );

  return (
    <PlaygroundContext.Provider
      value={{
        schema,
        setSchema,
        list,
        compsMap,
        ...props,
        currentId,
        setCurrentId,
        keyToContentMap,
        updateConfigValueById,
      }}
    >
      <DragDropContext
        onDragEnd={(res) => {
          const { source, destination, draggableId } = res;

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
            setCurrentId(compKey);
          } else {
            schema.order = reorder(schema.order, source.index, destination.index);
          }

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
