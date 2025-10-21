import { Users, UsersProvider } from "@/features/users";
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
