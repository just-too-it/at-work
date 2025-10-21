import clsx from "clsx";

import { USER_PROFILE_TABS } from "../../lib/userProfileTabs";

import styles from "./UserInfo.module.scss";

import type { UserInfoProps } from "./types";

export const UserInfo = ({ img, activeTab, onTabChange }: UserInfoProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={img} alt={"User Photo"} className={styles.img} />
      </div>
      <ul className={styles.content}>
        {USER_PROFILE_TABS.map((tab) => (
          <li
            key={tab}
            className={clsx(styles.tab, {
              [styles.active]: tab === activeTab,
            })}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </article>
  );
};
