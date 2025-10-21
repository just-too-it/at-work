import type { UserProfile } from "./user-profile.types";

export interface UserProfileState {
  currentUser: UserProfile | null;
  isLoading: boolean;
  error: string | null;
  updateUser: (user: Partial<UserProfile>) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}
