import type { User } from "@/entities/user";

export interface UsersState {
  users: User[];
  isInitialized: boolean;
  isLoading: boolean;
  error: string | null;

  initializeUsers: (users: User[]) => void;
  archiveUser: (userId: number) => void;
  activateUser: (userId: number) => void;
  hideUser: (userId: number) => void;

  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}
