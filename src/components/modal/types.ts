import { ReactNode } from "react";

export interface ModalProps {
    open: boolean;
    title?: string;
    onClose: () => void;
    children?: ReactNode
    className?: string
}