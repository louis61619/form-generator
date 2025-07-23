import styled from '@emotion/styled';
import { Schema } from '@l-lib/low-code-engine';
import { Modal, ModalBaseProps, SegmentedControl } from '@mantine/core';
import { useState } from 'react';
import { RenderSchema } from '../render';

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
