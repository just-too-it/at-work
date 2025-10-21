import { useNavigate } from "react-router-dom";

import { BackIcon } from "../icons";

import styles from "./BackButton.module.scss";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Назад"
      className={styles.backButton}
    >
      <BackIcon />
      Назад
    </button>
  );
};
