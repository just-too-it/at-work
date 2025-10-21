import type { ReactNode } from "react";

export interface DropdownAction {
  label: string;
  onClick: () => void;
}

export interface DropdownMenuProps {
  icon: ReactNode;
  actions: DropdownAction[];
}
