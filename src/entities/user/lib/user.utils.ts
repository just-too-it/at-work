import type { User, UserDTO } from "../model";
import type { UserProfile } from "@/features/userProfile/model";

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

export const mapUserDTOToUserProfile = (user: UserDTO): UserProfile => {
  return {
    id: user.id,
    username: user.username,
    city: user.address.city,
    company: user.company.name,
    img: ASSETS.IMAGES.USER,
    isActive: true,
    name: user.name,
    email: user.email,
    phone: user.phone,
  };
};
