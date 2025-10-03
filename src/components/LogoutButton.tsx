"use client";

import { BASE_API_URL } from "@/constants/constants";
import styles from "./logoutButton.module.css";

const handleLogout = async () => {
  await fetch(`${BASE_API_URL}/auth/logout`, {
    credentials: "include",
    method: "DELETE",
  });
  location.assign("/");
};

const LogoutButton = () => {
  return (
    <button onClick={handleLogout} className={styles.button}>
      Выйти
    </button>
  );
};

export default LogoutButton;
