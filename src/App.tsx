import React from 'react';
import { Playground } from './playground';
import { Global, css, Theme } from '@emotion/react';
import { Header } from './common/header';

import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>
      <Global
        styles={css`
          html,
          body,
          #root {
            width: 100%;
            height: 100%;
          }

          * {
            box-sizing: border-box;
          }

          main {
            height: calc(100% - 60px);
            overflow: auto;
            width: 100%;
            padding: 8px;
          }

          :root {
            border-color: #e4e7ed;
          }
        `}
      />

      <Header />
      <main>
        <Playground />
      </main>
    </MantineProvider>
  );
}

export default App;
