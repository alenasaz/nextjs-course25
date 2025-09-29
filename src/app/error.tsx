"use client";

import { FC } from "react";
import styles from "./global-error.module.css";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}
const Error: FC<ErrorProps> = ({ error, reset }) => {
  return (
    <html lang="ru">
      <body className={styles.body}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Произошла ошибка</h1>
            <p className={styles.description}>
              {error.message ||
                "Что-то пошло не так. Пожалуйста, попробуйте еще раз."}
            </p>
            {error.digest && (
              <p className={styles.digest}>Код ошибки: {error.digest}</p>
            )}
            <div className={styles.actions}>
              <button className={styles.primaryButton} onClick={() => reset()}>
                Попробовать снова
              </button>
              <button
                className={styles.secondaryButton}
                onClick={() => (window.location.href = "/")}
              >
                На главную
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Error;
