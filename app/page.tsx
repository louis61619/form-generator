'use client';
import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { MantineProvider, Modal } from '@mantine/core';

import { Playground } from '@l-lib/low-code-engine';
import { Global, css } from '@emotion/react';
import { Header } from './common/header';
import { list } from './materials';

import '@mantine/core/styles.css';
import { PerviewModal } from './common/preview-modal';
import { sample } from './common/sample';
import { AskModal } from './common/ask-modal';
import { Notice } from './common/notice';

function App() {
  const [previewOpened, { open: openPreview, close: closePreview }] = useDisclosure(false);
  const [askAIOpened, { open: openAskAIModal, close: closeAskAIModal }] = useDisclosure(false);
  const [noticeParams, setNoticeParams] = useState({ msg: '', title: '' });
  const [schema, setSchema] = useState(sample);

  const setNoticeError = (msg: string) => {
    setNoticeParams({ msg, title: 'Error' });
  }

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

          .mantine-InputWrapper-description {
            margin-bottom: 4px;
          }
        `}
      />

      <Header openPreviewModal={openPreview} openAskAIModal={openAskAIModal} />
      <main>
        <Playground schema={schema} setSchema={setSchema} list={list} />
        <PerviewModal schema={schema} opened={previewOpened} onClose={closePreview} />
        <AskModal opened={askAIOpened} onClose={closeAskAIModal} setSchema={setSchema} setNoticeError={setNoticeError} />
        <Notice noticeParams={noticeParams} />
      </main>
    </MantineProvider>
  );
}

export default App;
