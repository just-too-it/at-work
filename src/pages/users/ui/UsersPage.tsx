import { Users, UsersProvider } from "@/features/users";
import { AppHeader } from "@/widgets";

const UsersPage = () => {
  return (
    <>
      <AppHeader />
      <main className="container">
        <UsersProvider>
          <Users />
        </UsersProvider>
      </main>
    </>
  );
};

export default UsersPage;
