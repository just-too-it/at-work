import {
  useActiveUsers,
  useArchivedUsers,
  useUsersQuery,
  useUsersStore,
} from "../model";

import { List } from "./components";
import styles from "./Users.module.scss";

import { getErrorMessage } from "@/shared/lib/utils";
import { Loader } from "@/shared/ui";

export const Users = () => {
  const { error: queryError, isLoading: queryLoading } = useUsersQuery();
  const { isInitialized } = useUsersStore();

  const activeUsers = useActiveUsers();
  const archivedUsers = useArchivedUsers();

  if (queryLoading && !isInitialized)
    return (
      <div className={styles.data}>
        <Loader />
      </div>
    );

  if (queryError)
    return <div className={styles.data}>{getErrorMessage(queryError)}</div>;

  return (
    <>
      {!queryLoading &&
      !queryError &&
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
