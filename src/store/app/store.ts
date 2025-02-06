import { create } from "zustand";
import { ConfirmModalState } from "./types";



export const useConfirmDialogStore = create<ConfirmModalState>((set) => ({
    open: false,
    description: 'Are you sure to delete!',
    setConformModal: ({open,description}) => set({open,description})
}))