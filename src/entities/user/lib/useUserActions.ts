import type { DropdownAction } from "@/shared/ui";

import { useUsersStore } from "@/features/users";

export const useUserAction = (userId: number, isActive: boolean) => {
  const { archiveUser, activateUser, hideUser } = useUsersStore();

  const activeUserActions: DropdownAction[] = [
    {
      label: "Редактировать",
      onClick: () => console.log(userId),
    },
    {
      label: "Архивировать",
      onClick: () => archiveUser(userId),
    },
    {
      label: "Скрыть",
      onClick: () => hideUser(userId),
    },
  ];

  const archivedUserActions: DropdownAction[] = [
    {
      label: "Активировать",
      onClick: () => activateUser(userId),
    },
  ];

  return isActive ? activeUserActions : archivedUserActions;
};
