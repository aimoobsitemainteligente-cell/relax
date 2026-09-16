import styles from "./layout.module.css";
import Link from "next/link";

export default function PoliticasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Documentos Legais</h1>
      </div>
      
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <nav className={styles.nav}>
            <Link href="/politicas/trocas" className={styles.navLink}>Política de Trocas</Link>
            <Link href="/politicas/privacidade" className={styles.navLink}>Política de Privacidade</Link>
            <Link href="/politicas/termos" className={styles.navLink}>Termos de Uso</Link>
            <Link href="/politicas/cookies" className={styles.navLink}>Política de Cookies</Link>
          </nav>
        </aside>
        
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
}
