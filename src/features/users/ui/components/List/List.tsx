import styles from "./List.module.scss";

import type { UsersListProps } from "../../types";

import { UserCard } from "@/entities/user";
import { Header } from "@/shared/ui";

export const List = ({ title, users }: UsersListProps) => {
  if (users?.length === 0) return null;

  return (
    <section className={styles.section}>
      <Header title={title} />
      <ul className={styles.list}>
        {users?.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </section>
  );
};
