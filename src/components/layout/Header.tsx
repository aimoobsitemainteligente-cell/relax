import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftGroup}>
          <MobileMenu />
          <button className={styles.locationBtn}>
            <span className={styles.icon}>📍</span>
            <span>Rio das Ostras</span>
          </button>
        </div>

        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.brandName}>INTIMATES</span>
          </Link>
        </div>

        <div className={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Buscar lingerie, vibrador, cosméticos..." 
            className={styles.searchInput}
          />
          <button className={styles.searchBtn}>🔍</button>
        </div>

        <div className={styles.rightGroup}>
          <Link href="/minha-conta" className={styles.accountLink}>
            <span className={styles.icon}>👤</span>
            <span>Minha Conta</span>
          </Link>
          
          <Link href="/carrinho" className={styles.cartLink}>
            <div className={styles.cartIconWrapper}>
              <span className={styles.icon}>🛒</span>
            </div>
            <div className={styles.cartInfo}>
              <span className={styles.cartTitle}>CARRINHO</span>
              <span className={styles.cartPrice}>R$ 0,00</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
