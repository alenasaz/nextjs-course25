"use client";

import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";
import { use } from "react";
import { UserContext } from "@/app/providers/user-provider";

const Header = () => {
  const { user } = use(UserContext);
  const pathname = usePathname();

  // Функция для проверки активного пути
  const isActive = (path: string) => {
    return pathname === path || (path !== "/" && pathname.startsWith(path));
  };

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        <div className={styles.headerTitle}>TENNIS STORE</div>
        <div className={styles.nav}>
          <Link
            prefetch={false}
            href="/"
            className={`${styles.navLink} ${
              isActive("/") ? styles.active : ""
            }`}
          >
            Главная
          </Link>
          <Link
            prefetch={false}
            href="/rackets"
            className={`${styles.navLink} ${
              isActive("/rackets") ? styles.active : ""
            }`}
          >
            Ракетки
          </Link>
          <Link
            prefetch={false}
            href="/top10"
            className={`${styles.navLink} ${
              isActive("/top10") ? styles.active : ""
            }`}
          >
            Топ-10
          </Link>
          {user ? (
            <LogoutButton />
          ) : (
            <Link className={`${styles.navLink}`} href="/login">
              Войти
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
