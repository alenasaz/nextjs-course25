import Link from "next/link";
import "./globals.css";
import styles from "./page.module.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className={styles.headerWrapper}>
          <div className={styles.headerContent}>
            <div className={styles.headerTitle}>TENNIS STORE</div>
            <div className={styles.nav}>
              <Link prefetch={false} href="/" className={styles.navLink}>
                Главная
              </Link>
              <Link prefetch={false} href="/rackets" className={styles.navLink}>
                Ракетки
              </Link>
            </div>
          </div>
        </header>

        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
