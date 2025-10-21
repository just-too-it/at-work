import clsx from "clsx";

import styles from "./FormField.module.scss";

import type { FormFieldProps } from "./types";

export const FormField = ({
  label,
  id,
  type = "text",
  register,
  error,
  className = "",
}: FormFieldProps) => {
  return (
    <div className={clsx(styles.field, className)}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register}
        className={clsx(styles.input, {
          [styles.error]: error,
        })}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
