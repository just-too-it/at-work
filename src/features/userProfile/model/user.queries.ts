import { useQuery } from "@tanstack/react-query";

import { userApi } from "./user.api";

export const useUserProfileQuery = (userId: number) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => userApi.fetchUserById(userId),
  });
};
