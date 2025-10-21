import styles from "./Logo.module.scss";

import logo from "@/shared/assets/icons/logo.svg";

export const Logo = () => {
  return (
    <article className={styles.logo}>
      <img src={logo} alt="At work" width="24px" height="24px" />
      <p className={styles.primaryText}>
        at-<span className={styles.secondaryText}>work</span>
      </p>
    </article>
  );
};
