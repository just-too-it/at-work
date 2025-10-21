import { mapUserDTOToUserProfile } from "../../../entities/user/lib/user.utils";

import type { UserProfile } from "./user-profile.types";

import { type UserDTO } from "@/entities/user";
import config from "@/shared/config/api";
import { getErrorMessage } from "@/shared/lib/utils";

const { baseUrl } = config.api;

export const userApi = {
  fetchUserById: async (id: number): Promise<UserProfile> => {
    const response = await fetch(`${baseUrl}/users/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    try {
      const data: UserDTO = await response.json();
      return mapUserDTOToUserProfile(data);
    } catch (error) {
      console.log(getErrorMessage(error));
      return {} as UserProfile;
    }
  },
};
