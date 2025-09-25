import styles from "./page.module.css";

export default function Loading() {
  return (
    <div className={styles.containerLoading}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Загрузка...</p>
    </div>
  );
}
