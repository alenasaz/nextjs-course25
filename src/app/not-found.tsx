import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.containerNotFound}>
      <h1 className={styles.title}>Not Found</h1>
      <p className={styles.description}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
    </div>
  );
}
