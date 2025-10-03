"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { signupAction } from "./signup-action";

const SignUpPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [{ error, redirectTo }, formAction, isPending] = useActionState(
    signupAction,
    {
      error: "",
    }
  );

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
        <h1 className={styles.title}>Регистрация</h1>

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
        <button disabled={isPending} type="submit" className={styles.button}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
