import type { User } from "@/entities/user";

export interface UsersState {
  users: User[];
  isInitialized: boolean;

  initializeUsers: (users: User[]) => void;
  archiveUser: (userId: number) => void;
  activateUser: (userId: number) => void;
  hideUser: (userId: number) => void;
}
