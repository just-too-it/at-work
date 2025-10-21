import z from "zod";

import type { User } from "@/entities/user";

export interface UserProfile extends User {
  name: string;
  email: string;
  phone: string;
}

export const userProfileSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно быть от 2 символов")
    .max(64, "Имя должно быть до 64 символов"),
  username: z
    .string()
    .min(2, "Никнейм должен быть от 2 символов")
    .max(64, "Никнейм должен быть до 64 символов"),
  email: z.string().email("Введите корректный email"),
  city: z
    .string()
    .min(2, "Город должен быть от 2 символов")
    .max(64, "Город должен быть до 64 символов"),
  phone: z.string().regex(/^\d+$/, "Телефон должен содержать только цифры"),
  company: z
    .string()
    .min(2, "Название компании должно быть от 2 символов")
    .max(64, "Название компании должно быть до 64 символов"),
});

export type ProfileFormData = z.infer<typeof userProfileSchema>;
