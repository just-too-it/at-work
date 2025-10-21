import type { AvatarProps } from "../ui/Avatar";

import { ASSETS } from "@/shared/lib/utils";

export const mockAvatar: AvatarProps = {
  name: "Ivan 1234",
  img: ASSETS.IMAGES.AVATAR,
} as const;

export const mockUser = {
  img: ASSETS.IMAGES.USER,
} as const;
