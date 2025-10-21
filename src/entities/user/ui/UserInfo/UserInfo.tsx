import clsx from "clsx";
import { useState } from "react";

import { USER_PROFILE_TABS } from "../../lib/userProfileTabs";

import styles from "./UserInfo.module.scss";

import type { UserInfoProps } from "./types";

export const UserInfo = ({ img }: UserInfoProps) => {
  const [currentTab, setCurrentTab] = useState(USER_PROFILE_TABS[0]);

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
              [styles.active]: tab === currentTab,
            })}
            onClick={() => setCurrentTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </article>
  );
};
