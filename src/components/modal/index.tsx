import { FC, useEffect, useState } from 'react';

import { ModalProps } from './types';

export const Modal: FC<ModalProps> = ({
  open,
  className,
  children,
  title,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    if (open) {
      setIsOpen(true);
    } else {
      setTimeout(() => setIsOpen(false), 300);
    }
  }, [open]);

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      {/* Modal Background */}
      <div
        className="fixed top-0 bottom-0 left-0 right-0 z-10 "
        style={{ backgroundColor: 'rgba(156, 163, 175, 0.5)' }}
        onClick={onClose} // Close the modal when clicking on the background
      />

      {/* Modal Content */}
      <div
        className={`fixed z-50 w-96 min-h-60 p-5 shadow-lg bg-white ${className} transition-all duration-300 transform ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-full flex justify-between items-center">
          <h5>{title}</h5>
          <button onClick={onClose}>x</button>
        </div>
        {children}
      </div>
    </div>
  );
};
