import type { UseFormRegisterReturn } from "react-hook-form";

export interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: { message?: string };
  className?: string;
}
