import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useUserProfileQuery } from "../model/user-profile.queries";
import { useUserProfileStore } from "../model/user-profile.store";

export const UserProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { userId } = useParams();

  const { data: user, isLoading, error } = useUserProfileQuery(Number(userId));
  const { updateUser, setLoading, setError } = useUserProfileStore();

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (error) {
      setError(error.message);
    } else {
      setError(null);
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      updateUser(user);
    }
  }, [user]);

  return <>{children}</>;
};
