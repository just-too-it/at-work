import { useState } from "react";

import { useUserProfileStore } from "../model";

import { ProfileCard, UserInfo } from "./components";
import styles from "./UserProfile.module.scss";

import { USER_PROFILE_TABS } from "@/entities/user/lib/userProfileTabs";
import { getErrorMessage } from "@/shared/lib/utils";
import { Loader } from "@/shared/ui";

export const UserProfile = () => {
  const [currentTab, setCurrentTab] = useState(USER_PROFILE_TABS[0]);

  const { currentUser, isLoading, error } = useUserProfileStore();

  if (isLoading)
    return (
      <div className={styles.data}>
        <Loader />
      </div>
    );

  if (error) return <div className={styles.data}>{getErrorMessage(error)}</div>;

  if (!currentUser) {
    return <div className={styles.data}>Пользователь не найден</div>;
  }

  return (
    <section className={styles.content}>
      <UserInfo
        img={currentUser?.img}
        activeTab={currentTab}
        onTabChange={setCurrentTab}
      />
      {currentTab === "Данные профиля" ? (
        <ProfileCard title="Данные профиля" user={currentUser}></ProfileCard>
      ) : (
        <div className={styles.empty}>Для этого раздела нет данных</div>
      )}
    </section>
  );
};
