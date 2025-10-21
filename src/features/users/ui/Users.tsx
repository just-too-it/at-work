import { useActiveUsers, useArchivedUsers, useUsersStore } from "../model";

import { List } from "./components";
import styles from "./Users.module.scss";

import { getErrorMessage } from "@/shared/lib/utils";
import { Loader } from "@/shared/ui";

export const Users = () => {
  const { isInitialized, isLoading, error } = useUsersStore();

  const activeUsers = useActiveUsers();
  const archivedUsers = useArchivedUsers();

  if (isLoading && !isInitialized)
    return (
      <div className={styles.data}>
        <Loader />
      </div>
    );

  if (error) return <div className={styles.data}>{getErrorMessage(error)}</div>;

  return (
    <>
      {!isLoading &&
      !error &&
      activeUsers?.length === 0 &&
      archivedUsers?.length === 0 ? (
        <div className={styles.data}>Пользователи не найдены</div>
      ) : (
        <>
          <List users={activeUsers} title={"Активные"} />
          <List users={archivedUsers} title={"Архив"} />
        </>
      )}
    </>
  );
};
