import React from 'react';
import { Playground } from './playground';
import { ThemeProvider } from '@emotion/react';
import { Global, css, Theme } from '@emotion/react';
import { Header } from './common/header';
import { theme } from './common/theme';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const matheme = createTheme({
  /** Put your mantine theme override here */
});

const appTheme: Theme = theme;

function App() {
  return (
    <MantineProvider theme={matheme}>
      <ThemeProvider theme={appTheme}>
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
      </ThemeProvider>
    </MantineProvider>
  );
}

export default App;
