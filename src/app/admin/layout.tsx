import Link from "next/link";
import styles from "./layout.module.css";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          Relax Admin
        </div>
        <nav className={styles.nav}>
          <Link href="/admin" className={styles.navLink}>
            Dashboard
          </Link>
          <Link href="/admin/produtos" className={styles.navLink}>
            Produtos
          </Link>
          <Link href="/admin/pedidos" className={styles.navLink}>
            Pedidos
          </Link>
          <Link href="/" className={styles.navLinkReturn}>
            ← Voltar à Loja
          </Link>
        </nav>
      </aside>
      
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
