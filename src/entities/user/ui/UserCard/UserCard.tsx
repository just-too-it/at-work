import clsx from "clsx";

import { useUserAction } from "../../lib/useUserActions";

import styles from "./UserCard.module.scss";

import type { UserCardProps } from "./types";

import { DropdownMenu } from "@/shared/ui";
import { MenuDotsIcon } from "@/shared/ui/icons";

export const UserCard = ({ user }: UserCardProps) => {
  const actions = useUserAction(user.id, user.isActive);
  return (
    <article className={styles.card}>
      <div
        className={clsx(styles.imgWrapper, {
          [styles.archived]: !user.isActive,
        })}
      >
        <img src={user.img} alt={user.username} className={styles.img} />
      </div>

      <div className={styles.content}>
        <header className={styles.header}>
          <h2
            className={clsx(styles.name, {
              [styles.archived]: !user.isActive,
            })}
          >
            {user.username}
          </h2>
          <DropdownMenu
            icon={<MenuDotsIcon size={24} className={styles.menuDots} />}
            actions={actions}
          />
        </header>

        <div
          className={clsx(styles.company, {
            [styles.archived]: !user.isActive,
          })}
        >
          {user.company}
        </div>
        <div
          className={clsx(styles.city, {
            [styles.archived]: !user.isActive,
          })}
        >
          {user.city}
        </div>
      </div>
    </article>
  );
};
