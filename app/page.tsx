'use client';
import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { MantineProvider, Modal } from '@mantine/core';

import { Playground } from '@l-lib/low-code-engine';
import { Global, css } from '@emotion/react';
import { Header } from './common/header';
import { list } from './materials';

import '@mantine/core/styles.css';
import { PerviewModal } from './common/modal';
import { sample } from './common/sample';

function App() {
  const [opened, { open, close }] = useDisclosure(false);

  const [schema, setSchema] = useState(sample);

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
        <Playground schema={schema} setSchema={setSchema} list={list} />
        <PerviewModal schema={schema} opened={opened} onClose={close} />
      </main>
    </MantineProvider>
  );
}

export default App;
