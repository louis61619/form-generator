import { useDisclosure } from '@mantine/hooks';
import { Button, SegmentedControl, Modal, ModalBaseProps, ModalRootProps } from '@mantine/core';
import { Schema } from '../types/schema';
import { RenderSchema } from '../render';
import styled from '@emotion/styled';
import { useEffect, useState, useRef } from 'react';

type ModalProps = ModalBaseProps;
type CompProps = React.FC<{ schema: Schema } & ModalProps>;

const ModalWrapper = styled(Modal.Root)`
  .mantine-Modal-content {
    height: 90vh;
  }
`;

type PanelKeys = 'Preview' | 'Data' | 'Schema';

export const PerviewModal: CompProps = ({ schema, opened, onClose, ...props }) => {
  const [isMounted, setMounted] = useState('');
  const [panel, setPanel] = useState<PanelKeys>('Preview');
  const [data, setData] = useState<any>({});

  const reset = () => {
    setMounted('');
    setPanel('Preview');
    setData({});
  };

  return (
    <ModalWrapper
      opened={opened}
      onClose={() => {
        onClose();
        reset();
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
          <Modal.Title>
            <SegmentedControl
              data={['Preview', 'Data', 'Schema']}
              key={isMounted}
              value={panel}
              onChange={(v) => {
                setPanel(v as PanelKeys);
              }}
            />
          </Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          {panel === 'Preview' ? (
            <RenderSchema
              schema={schema}
              onChange={(v) => {
                setData(v);
              }}
            />
          ) : null}
          {panel === 'Data' ? <pre>{JSON.stringify(data, null, 2)}</pre> : null}
          {panel === 'Schema' ? <pre>{JSON.stringify(schema, null, 2)}</pre> : null}
        </Modal.Body>
      </Modal.Content>
    </ModalWrapper>
  );
};
