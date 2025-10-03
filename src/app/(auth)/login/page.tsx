"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import { LoginState } from "@/types/types";
import { loginAction } from "./login-action";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [{ error, redirectTo }, formAction, isPending] = useActionState<
    LoginState,
    FormData
  >(loginAction, {
    error: "",
  });

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Вход в систему</h1>

        <div className={styles.inputGroup}>
          <label htmlFor="login" className={styles.label}>
            Логин
          </label>
          <input
            type="text"
            id="login"
            name="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Пароль
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        {error && <div>{error}</div>}
        <button type="submit" className={styles.button} disabled={isPending}>
          Войти
        </button>
        <p className={styles.hint}>
          Нет аккаунта?{" "}
          <Link prefetch={false} href="/signup" className={styles.link}>
            Зарегистрируйтесь
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
