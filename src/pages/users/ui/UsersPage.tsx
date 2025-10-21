import { Users } from "@/features/users";
import { UsersProvider } from "@/features/users/providers";
import { Header } from "@/widgets";

const UsersPage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <UsersProvider>
          <Users />
        </UsersProvider>
      </main>
    </>
  );
};

export default UsersPage;
