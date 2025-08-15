import styled from '@emotion/styled';
import { Schema } from '@l-lib/low-code-engine';
import { Button, Input, Modal, ModalBaseProps, Text, Space, Textarea } from '@mantine/core';
import { useState } from 'react';
import { AIKeyInput } from './key-input';

type ModalProps = ModalBaseProps;
type CompProps = React.FC<
  ModalProps & {
    setSchema: (schema: Schema) => void;
    setNoticeError: (msg: string) => void;
    apiKey: string;
    setApiKey: (key: string) => void;
  }
>;

const ModalWrapper = styled(Modal.Root)``;

export const AskModal: CompProps = ({ opened, onClose, setSchema, setNoticeError, apiKey, setApiKey, ...props }) => {
  const [isMounted, setMounted] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <ModalWrapper
      opened={opened}
      onClose={() => {
        onClose();
      }}
      size="lg"
      {...props}
      onTransitionEnd={() => {
        if (isMounted.length >= 2) return;
        setMounted(isMounted + 1);
      }}
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header style={{ minHeight: 64 }}>
          <Modal.Title>Ask AI</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          <Textarea
            placeholder="Ask AI to generate form"
            onChange={(event) => {
              setQuestion(event.currentTarget.value);
            }}
            rows={6}
          />
          <Space h="md" />
          <AIKeyInput placeholder="enter your open ai API key" apiKey={apiKey} setApiKey={(v) => setApiKey(v)} />
          <Button
            loading={loading}
            onClick={() => {
              setLoading(true);
              fetch((process.env.NEXT_PUBLIC_API_URL || '') + '/api/gen-form', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ msg: question, apiKey }),
              })
                .then((response) => response.json())
                .then((data) => {
                  if (data.error) {
                    setNoticeError(`You didn't provide an API key.`);
                    return;
                  }
                  setSchema(data.schema as Schema);
                  onClose();
                })
                .catch((error) => {
                  alert('error');
                  console.error('Error fetching AI response:', error);
                })
                .finally(() => {
                  setLoading(false);
                });
            }}
          >
            Generate
          </Button>
        </Modal.Body>
      </Modal.Content>
    </ModalWrapper>
  );
};
