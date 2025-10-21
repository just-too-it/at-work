import { useState } from "react";
import { useParams } from "react-router-dom";

import { useUserProfileQuery, useUserProfileStore } from "../model";

import styles from "./UserProfile.module.scss";

import { UserInfo } from "@/entities/user";
import { USER_PROFILE_TABS } from "@/entities/user/lib/userProfileTabs";
import { getErrorMessage } from "@/shared/lib/utils";
import { Loader } from "@/shared/ui";

export const UserProfile = () => {
  const { userId } = useParams();
  const [currentTab, setCurrentTab] = useState(USER_PROFILE_TABS[0]);
  const { error: queryError, isLoading: queryLoading } = useUserProfileQuery(
    Number(userId)
  );
  const { currentUser } = useUserProfileStore();

  if (queryLoading)
    return (
      <div className={styles.data}>
        <Loader />
      </div>
    );

  if (queryError)
    return <div className={styles.data}>{getErrorMessage(queryError)}</div>;

  return (
    <>
      <UserInfo
        img={currentUser?.img}
        activeTab={currentTab}
        onTabChange={setCurrentTab}
      />
      {currentTab === "Данные профиля" ? (
        <>User Profile</>
      ) : (
        <div className={styles.empty}>Для этого раздела нет данных</div>
      )}
    </>
  );
};
