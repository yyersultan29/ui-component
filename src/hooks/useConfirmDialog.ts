import { useConfirmDialogStore } from "../store/app/store"


let resolveCallback: (val: unknown) => void;

export const useConfirmDialog = () => {
    const {open,description,setConformModal} = useConfirmDialogStore();

    const okCallback = () => {
        resolveCallback(true);
        closeModal();
    }

    const noCalback = () => {
        resolveCallback(false);
        closeModal();
    }

    const closeModal = () => {
        setConformModal({open: false})
    }

    const confirm = () => {
        setConformModal({open: true});
        return new Promise((callback) => {
            resolveCallback = callback;
        })
        
    }

    return {
        confirm,
        okCallback,
        noCalback,
        open,
        description
    }
}