import { useState } from "react";

import styles from "./DropdownMenu.module.scss";

import type { DropdownAction, DropdownMenuProps } from "./types";

import { useClickOutside } from "@/shared/lib/hooks";

export const DropdownMenu = ({ icon, actions }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleActionClick = (action: DropdownAction) => {
    action.onClick();
    setIsOpen(false);
  };

  const dropdownRef = useClickOutside<HTMLDivElement>(handleClose);

  return (
    <div className={styles.dropdownWrapper} ref={dropdownRef}>
      <button
        className={styles.trigger}
        onClick={handleButtonClick}
        aria-expanded={isOpen}
        aria-label="Открыть меню действий"
        aria-haspopup="true"
      >
        {icon}
      </button>
      {isOpen && (
        <ul className={styles.menu} role="menu">
          {actions.map((action, index) => (
            <li key={index} className={styles.menuItem} role="menuitem">
              <button
                onClick={() => handleActionClick(action)}
                className={styles.menuButton}
              >
                {action.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
