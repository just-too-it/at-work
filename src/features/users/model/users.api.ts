import { mapUserDTOToUser, type User, type UserDTO } from "@/entities/user";
import config from "@/shared/config/api";
import { getErrorMessage } from "@/shared/lib/utils";

const { baseUrl } = config.api;

export const USERS_DISPLAY_LIMIT = 6;

export const usersApi = {
  fetchUsers: async (): Promise<User[]> => {
    const response = await fetch(
      `${baseUrl}/users?_limit=${USERS_DISPLAY_LIMIT}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    try {
      const data: UserDTO[] = await response.json();
      return data.map(mapUserDTOToUser);
    } catch (error) {
      console.log(getErrorMessage(error));
      return [] as User[];
    }
  },
};
