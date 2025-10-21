import { useEffect } from "react";

import { useUsersQuery, useUsersStore } from "../model";

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: users } = useUsersQuery();
  const { initializeUsers, isInitialized } = useUsersStore();

  useEffect(() => {
    if (users && !isInitialized) {
      initializeUsers(users);
    }
  }, [users, isInitialized]);

  return <>{children}</>;
};
