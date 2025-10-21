import styles from "./SuccessPopup.module.scss";

import type { SuccessPopupProps } from "./types";

import { Modal } from "@/shared/ui";
import { SuccessIcon } from "@/shared/ui/icons";

export const SuccessPopup = ({ isOpen, onClose }: SuccessPopupProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.popup}>
        <SuccessIcon color="var(--color-08)" />
        <span className={styles.message}>Изменения сохранены!</span>
      </div>
    </Modal>
  );
};
