import { create } from "zustand";

import type { UserProfileState } from "./store.types";

export const useUserProfileStore = create<UserProfileState>()((set) => ({
  currentUser: null,

  updateUser: (user) =>
    set({
      currentUser: user,
    }),
}));
