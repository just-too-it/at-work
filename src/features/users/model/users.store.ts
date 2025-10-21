import { useMemo } from "react";
import { create } from "zustand";

import type { UsersState } from "./store.types";

export const useUsersStore = create<UsersState>()((set) => ({
  users: [],
  isInitialized: false,
  isLoading: true,
  error: null,

  initializeUsers: (users) =>
    set({
      users,
      isInitialized: true,
      isLoading: false,
      error: null,
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

  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
}));

export const useActiveUsers = () => {
  const users = useUsersStore((state) => state.users);
  return useMemo(() => users.filter((user) => user.isActive), [users]);
};

export const useArchivedUsers = () => {
  const users = useUsersStore((state) => state.users);
  return useMemo(() => users.filter((user) => !user.isActive), [users]);
};
