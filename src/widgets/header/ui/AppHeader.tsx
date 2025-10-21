import clsx from "clsx";

import styles from "./AppHeader.module.scss";

import { Avatar, mockAvatar } from "@/entities/user";
import { Logo } from "@/shared/ui";
import { LikeIcon, NotificationIcon } from "@/shared/ui/icons";

export const AppHeader = () => {
  return (
    <header className="full-width">
      <div className={clsx("container", styles.header)}>
        <Logo />
        <div className={styles.profile}>
          <div className={styles.icons}>
            <LikeIcon color="var(--color-02)" />
            <NotificationIcon color="var(--color-02)" />
          </div>
          <Avatar name={mockAvatar.name} img={mockAvatar.img} />
        </div>
      </div>
    </header>
  );
};
