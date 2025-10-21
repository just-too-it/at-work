import { Routes, Route } from "react-router-dom";

import { APP_ROUTES } from "./routes";

import { UserProfilePage, UsersPage } from "@/pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<UsersPage />} />
      <Route path={APP_ROUTES.USER} element={<UserProfilePage />} />
    </Routes>
  );
};
