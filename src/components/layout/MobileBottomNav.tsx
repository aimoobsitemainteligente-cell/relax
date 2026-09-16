"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileBottomNav.module.css";

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.bottomNav}>
      <Link href="/" className={`${styles.navItem} ${pathname === '/' ? styles.active : ''}`}>
        <span className={styles.icon}>🏠</span>
        <span className={styles.label}>Início</span>
      </Link>
      
      <Link href="/busca" className={`${styles.navItem} ${pathname === '/busca' ? styles.active : ''}`}>
        <span className={styles.icon}>🔍</span>
        <span className={styles.label}>Busca</span>
      </Link>
      
      <Link href="/carrinho" className={`${styles.navItem} ${pathname === '/carrinho' ? styles.active : ''}`}>
        <div className={styles.cartBadgeWrapper}>
          <span className={styles.icon}>🛒</span>
          <span className={styles.badge}>2</span>
        </div>
        <span className={styles.label}>Carrinho</span>
      </Link>
      
      <Link href="/minha-conta" className={`${styles.navItem} ${pathname.startsWith('/conta') || pathname === '/minha-conta' ? styles.active : ''}`}>
        <span className={styles.icon}>👤</span>
        <span className={styles.label}>Conta</span>
      </Link>
    </nav>
  );
}
