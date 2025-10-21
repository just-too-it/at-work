import { EditProfileForm } from "../EditProfileForm";

import styles from "./ProfileCard.module.scss";

import type { ProfileCardProps } from "./types";

import { Header } from "@/shared/ui";

export const ProfileCard = ({ title, user }: ProfileCardProps) => {
  return (
    <article className={styles.profileCard}>
      <Header title={title} />
      <EditProfileForm user={user} />
    </article>
  );
};
