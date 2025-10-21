import { useNavigate } from "react-router";

import type { DropdownAction } from "@/shared/ui";

import { APP_ROUTES } from "@/app/router/routes";
import { useUsersStore } from "@/features/users";

export const useUserAction = (userId: number, isActive: boolean) => {
  const { archiveUser, activateUser, hideUser } = useUsersStore();
  const navigate = useNavigate();

  const activeUserActions: DropdownAction[] = [
    {
      label: "Редактировать",
      onClick: () => navigate(APP_ROUTES.USER(userId)),
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
