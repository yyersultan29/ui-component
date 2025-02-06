export interface ConfirmModalState {
  open: boolean;
  description?: string;
  setConformModal: ({
    open,
    description,
  }: {
    open: boolean;
    description?: string;
  }) => void;
}
