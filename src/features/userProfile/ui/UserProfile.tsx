import { useParams } from "react-router-dom";

import { useUserProfileQuery, useUserProfileStore } from "../model";

import styles from "./UserProfile.module.scss";

import { UserInfo } from "@/entities/user";
import { getErrorMessage } from "@/shared/lib/utils";
import { Loader } from "@/shared/ui";

export const UserProfile = () => {
  const { userId } = useParams();
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
      <UserInfo img={currentUser?.img} />
    </>
  );
};
