import styles from "./UserProfile.module.scss";

import { UserProfile } from "@/features/userProfile";
import { UserProfileProvider } from "@/features/userProfile/providers";
import { BackButton } from "@/shared/ui";
import { Header } from "@/widgets";

const UserProfilePage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <nav className={styles.nav}>
          <BackButton />
        </nav>
        <UserProfileProvider>
          <UserProfile />
        </UserProfileProvider>
      </main>
    </>
  );
};

export default UserProfilePage;
