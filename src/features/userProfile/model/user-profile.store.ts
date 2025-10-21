import { create } from "zustand";

import type { UserProfileState } from "./store.types";

export const useUserProfileStore = create<UserProfileState>()((set) => ({
  currentUser: null,
  isLoading: true,
  error: null,

  updateUser: (userUpdates) =>
    set((state) => ({
      currentUser: { ...state.currentUser!, ...userUpdates },
      isLoading: false,
      error: null,
    })),

  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
}));
