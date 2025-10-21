import { useMemo } from "react";
import { create } from "zustand";

import type { UsersState } from "./store.types";

export const useUsersStore = create<UsersState>()((set) => ({
  users: [],
  isInitialized: false,

  initializeUsers: (users) =>
    set({
      users,
      isInitialized: true,
    }),

  archiveUser: (userId) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId ? { ...user, isActive: false } : user
      ),
    })),

  activateUser: (userId) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId ? { ...user, isActive: true } : user
      ),
    })),

  hideUser: (userId) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== userId),
    })),
}));

export const useActiveUsers = () => {
  const users = useUsersStore((state) => state.users);
  return useMemo(() => users.filter((user) => user.isActive), [users]);
};

export const useArchivedUsers = () => {
  const users = useUsersStore((state) => state.users);
  return useMemo(() => users.filter((user) => !user.isActive), [users]);
};
