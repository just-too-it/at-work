import styles from "./Header.module.scss";

import type { HeaderProps } from "./types";

export const Header = ({ title }: HeaderProps) => {
  return <h1 className={styles.title}>{title}</h1>;
};
