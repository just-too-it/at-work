import type { User, UserDTO } from "../model";

import { ASSETS } from "@/shared/lib/utils";

export const mapUserDTOToUser = (user: UserDTO): User => {
  return {
    id: user.id,
    username: user.username,
    city: user.address.city,
    company: user.company.name,
    img: ASSETS.IMAGES.USER,
    isActive: true,
  };
};
