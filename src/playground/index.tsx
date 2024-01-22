import styled from '@emotion/styled';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Schema } from './types';
import { PlaygroundProvider } from './context';
import { Button } from '@mui/material';

const componentsList: any = [];

const PlaygroundWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Playground: React.FC<{
  schema?: Schema;
  setSchema?: (schema: Schema) => void;
}> = ({ schema = { type: 'object' }, ...props }) => {
  const [_schema, _setSchema] = useState<Schema>(schema);

  const setSchema = useCallback(
    (value: Schema) => {
      if (props.setSchema) {
        props.setSchema(value);
        return;
      }
      _setSchema(value);
    },
    [props],
  );

  return (
    <PlaygroundProvider {...props} schema={schema} setSchema={setSchema} components={componentsList}>
      <PlaygroundWrapper>
        {/* <Button>jioj</Button> */}
        {/* <ToolBar/>
        <Canvas />
        <Config /> */}
      </PlaygroundWrapper>
    </PlaygroundProvider>
  );
};
