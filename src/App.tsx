import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { MantineProvider, Modal } from '@mantine/core';

import { Playground } from './playground';
import { Global, css, Theme } from '@emotion/react';
import { Header } from './common/header';

import '@mantine/core/styles.css';
import { PerviewModal } from './common/modal';

function App() {
  const [opened, { open, close }] = useDisclosure(false);

  const [schema, setSchema] = useState({ type: 'object' });
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

      <Header openModal={open} />
      <main>
        <Playground schema={schema} setSchema={setSchema} />
        <PerviewModal schema={schema} opened={opened} onClose={close} />
      </main>
    </MantineProvider>
  );
}

export default App;
