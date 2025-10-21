import { Routes, Route } from "react-router";

import { UserProfilePage, UsersPage } from "@/pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<UsersPage />} />
      <Route path={"users/:userId"} element={<UserProfilePage />} />
    </Routes>
  );
};
