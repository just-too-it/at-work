import type { User } from "@/entities/user";

export interface UsersListProps {
  title: string;
  users: User[] | undefined;
}
