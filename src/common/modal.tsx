import { useDisclosure } from '@mantine/hooks';
import { MantineProvider, Modal, ModalBaseProps, ModalRootProps } from '@mantine/core';
import { Schema } from '../types/schema';
import { Preview } from '../preview';

type ModalProps = ModalBaseProps;
type CompProps = React.FC<{ schema: Schema } & ModalProps>;

export const PerviewModal: CompProps = ({ schema, opened, onClose, ...props }) => {
  return (
    <Modal.Root opened={opened} onClose={onClose} size="lg" {...props}>
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>Preview</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          <Preview schema={schema} />
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
