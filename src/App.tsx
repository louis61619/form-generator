import React from 'react';
import { Playground } from './playground';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Global, css } from '@emotion/react';

function App() {
  return (
    <ThemeProvider theme={{}}>
      <Global
        styles={css`
          html,
          body,
          #root {
            width: 100%;
            height: 100%;
          }
        `}
      />
      <Playground />
    </ThemeProvider>
  );
}

export default App;
