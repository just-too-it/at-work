import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useUserProfileQuery } from "../model/user.queries";
import { useUserProfileStore } from "../model/user.store";

export const UserProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { userId } = useParams();

  const { data: user } = useUserProfileQuery(Number(userId));
  const { updateUser } = useUserProfileStore();

  useEffect(() => {
    if (user) {
      updateUser(user);
    }
  }, [user]);

  return <>{children}</>;
};
