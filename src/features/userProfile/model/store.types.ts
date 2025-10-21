import type { UserProfile } from "../../../entities/user/model/user.types";

export interface UserProfileState {
  currentUser: UserProfile | null;
  updateUser: (user: UserProfile) => void;
}
