import styles from "../app/(auth)/page.module.css";

const Loading = () => {
  return (
    <div className={styles.containerLoading}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Загрузка...</p>
    </div>
  );
};

export default Loading;
