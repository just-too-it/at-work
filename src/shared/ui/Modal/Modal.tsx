import { useEffect } from "react";
import { createPortal } from "react-dom";

import { CloseIcon } from "../icons";

import styles from "./Modal.module.scss";

import type { ModalProps } from "./types";

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon color="var(--color-02)" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};
