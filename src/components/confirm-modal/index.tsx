import { useConfirmDialog } from '../../hooks/useConfirmDialog';
import { Modal } from '../modal';

export const ConfirmModal = () => {
  const { open, description, okCallback, noCalback } = useConfirmDialog();

  return (
    <Modal title="Подтверждение" open={open} onClose={noCalback}>
      <div>{description || 'Вы точно хотите удалить !'}</div>
      <div>
        <button onClick={noCalback}>NO</button>
        <button onClick={okCallback}>Yes</button>
      </div>
    </Modal>
  );
};
