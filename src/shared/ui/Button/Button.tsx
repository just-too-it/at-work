import clsx from "clsx";

import styles from "./Button.module.scss";

import type { ButtonProps } from "./types";

export const Button = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles.button, className, {
        [styles.disabled]: disabled,
      })}
    >
      {children}
    </button>
  );
};
