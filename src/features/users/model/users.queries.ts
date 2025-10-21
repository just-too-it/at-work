import { useQuery } from "@tanstack/react-query";

import { usersApi } from "./users.api";

export const useUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: usersApi.fetchUsers,
  });
};
