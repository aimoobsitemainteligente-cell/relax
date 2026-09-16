import React from "react";
import styles from "./layout.module.css";
import Link from "next/link";

export default function ContaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.profileHeader}>
          <div className={styles.avatar}>KC</div>
          <div className={styles.userInfo}>
            <h3>Kelly Cavalcante</h3>
            <p>debbysan@hotmail.com</p>
          </div>
        </div>
        
        <nav className={styles.nav}>
          <Link href="/conta/pedidos" className={styles.navItem}>Meus Pedidos</Link>
          <Link href="/conta/dados" className={styles.navItem}>Meus Dados</Link>
          <Link href="/conta/enderecos" className={styles.navItem}>Endereços</Link>
          <Link href="/conta/favoritos" className={styles.navItem}>Favoritos</Link>
          <button className={styles.navItemLogout}>Sair</button>
        </nav>
      </div>
      
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}
