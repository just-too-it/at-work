import { useEffect } from "react";

import { useUsersQuery, useUsersStore } from "../model";

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: users, isLoading, error } = useUsersQuery();
  const { initializeUsers, isInitialized, setLoading, setError } =
    useUsersStore();

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (users && !isInitialized) {
      initializeUsers(users);
    }
  }, [users, isInitialized]);

  return <>{children}</>;
};
