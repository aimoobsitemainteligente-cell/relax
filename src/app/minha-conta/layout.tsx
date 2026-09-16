import Link from "next/link";
import styles from "./layout.module.css";
import React from "react";

export default function MinhaContaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link href="/">Início</Link> &gt; <span>Minha Conta</span>
      </div>

      <div className={styles.dashboardLayout}>
        {/* Menu Lateral */}
        <aside className={styles.sidebar}>
          <div className={styles.userProfile}>
            <div className={styles.avatar}>KC</div>
            <div className={styles.userInfo}>
              <h3>Kelly Cavalcante</h3>
              <p>debbysan@hotmail.com</p>
            </div>
          </div>
          
          <nav className={styles.navMenu}>
            <Link href="/minha-conta" className={styles.navLink}>
              📦 Meus Pedidos
            </Link>
            <Link href="/minha-conta/dados" className={styles.navLink}>
              👤 Meus Dados
            </Link>
            <Link href="/minha-conta/enderecos" className={styles.navLink}>
              📍 Endereços
            </Link>
            <Link href="/minha-conta/favoritos" className={styles.navLink}>
              ❤️ Favoritos
            </Link>
            <button className={styles.logoutBtn}>
              Sair
            </button>
          </nav>
        </aside>

        {/* Conteúdo Principal dinâmico */}
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
}
