import styles from "./Avatar.module.scss";

import type { AvatarProps } from "./types";

export const Avatar = ({ name, img }: AvatarProps) => {
  return (
    <article className={styles.profile}>
      <div className={styles.avatar}>
        <img
          src={img}
          alt="Аватар пользователя"
          width={28}
          height={28}
          className={styles.img}
          role="img"
          loading="lazy"
        />
      </div>
      <div className={styles.name}>{name}</div>
    </article>
  );
};
