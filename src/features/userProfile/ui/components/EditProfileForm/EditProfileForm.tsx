import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import styles from "./EditProfileForm.module.scss";

import {
  userProfileSchema,
  useUserProfileStore,
  type ProfileFormData,
  type UserProfile,
} from "@/features/userProfile/model";
import { Button, FormField } from "@/shared/ui";

interface EditProfileFormProps {
  user: UserProfile;
}

export const EditProfileForm = ({ user }: EditProfileFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.city,
      phone: user.phone,
      company: user.company,
    },
  });

  const { updateUser } = useUserProfileStore();

  const onSubmit = async (data: ProfileFormData) => {
    updateUser({
      ...data,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <FormField
        label="Имя"
        id="name"
        register={register("name")}
        error={errors.name}
      />
      <FormField
        label="Никнейм"
        id="username"
        register={register("username")}
        error={errors.username}
      />
      <FormField
        label="Почта"
        id="email"
        register={register("email")}
        error={errors.email}
      />
      <FormField
        label="Город"
        id="city"
        register={register("city")}
        error={errors.city}
      />
      <FormField
        label="Телефон"
        id="phone"
        register={register("phone")}
        error={errors.phone}
      />
      <FormField
        label="Название компании"
        id="company"
        register={register("company")}
        error={errors.company}
      />
      <Button type="submit" className={styles.button}>
        Сохранить
      </Button>
    </form>
  );
};
