"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./MobileMenu.module.css";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <>
      <button className={styles.hamburgerBtn} onClick={toggleMenu} aria-label="Menu">
        ☰
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}

      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.drawerHeader}>
          <span className={styles.brandName}>INTIMATES</span>
          <button className={styles.closeBtn} onClick={toggleMenu}>×</button>
        </div>

        <div className={styles.drawerContent}>
          <div className={styles.profileSection}>
            <div className={styles.avatar}>F</div>
            <span>Olá, Fernanda</span>
          </div>

          <nav className={styles.navMenu}>
            <Link href="/" className={styles.navItem} onClick={toggleMenu}>Início</Link>
            
            <div className={styles.accordion}>
              <button 
                className={`${styles.navItem} ${styles.hasSubmenu} ${openSubmenu === 'lingerie' ? styles.active : ''}`}
                onClick={() => toggleSubmenu('lingerie')}
              >
                Lingerie
                <span className={styles.chevron}>{openSubmenu === 'lingerie' ? '−' : '+'}</span>
              </button>
              
              {openSubmenu === 'lingerie' && (
                <div className={styles.submenu}>
                  <Link href="/busca" className={styles.subItem} onClick={toggleMenu}>Conjuntos</Link>
                  <Link href="/busca" className={styles.subItem} onClick={toggleMenu}>Sutiãs</Link>
                  <Link href="/busca" className={styles.subItem} onClick={toggleMenu}>Calcinhas</Link>
                  <Link href="/busca" className={styles.subItem} onClick={toggleMenu}>Bodies</Link>
                  <Link href="/busca" className={styles.subItem} onClick={toggleMenu}>Camisolas</Link>
                  <Link href="/busca" className={styles.subItem} onClick={toggleMenu}>Espartilhos</Link>
                  <Link href="/busca" className={styles.subItem} onClick={toggleMenu}>Meias & Ligas</Link>
                </div>
              )}
            </div>

            <Link href="/busca" className={styles.navItem} onClick={toggleMenu}>Moda Íntima</Link>
            <Link href="/busca" className={styles.navItem} onClick={toggleMenu}>Acessórios</Link>
            <Link href="/busca" className={styles.navItem} onClick={toggleMenu}>Sex Shop</Link>
            <Link href="/busca" className={styles.navItem} onClick={toggleMenu}>Novidades</Link>
            <Link href="/campanhas/black-friday" className={styles.navItem} onClick={toggleMenu}>
              Promoções <span className={styles.badge}>HOT</span>
            </Link>
          </nav>

          <div className={styles.divider}></div>

          <nav className={styles.navMenuBottom}>
            <Link href="/minha-conta" className={styles.navItem} onClick={toggleMenu}>Minha Conta</Link>
            <Link href="/conta/pedidos" className={styles.navItem} onClick={toggleMenu}>Meus Pedidos</Link>
            <Link href="/conta/favoritos" className={styles.navItem} onClick={toggleMenu}>Favoritos</Link>
            <Link href="/conta/enderecos" className={styles.navItem} onClick={toggleMenu}>Endereços</Link>
            <Link href="/faq" className={styles.navItem} onClick={toggleMenu}>FAQ / Ajuda</Link>
            <Link href="/contato" className={styles.navItem} onClick={toggleMenu}>Contato</Link>
            <Link href="/sobre" className={styles.navItem} onClick={toggleMenu}>Sobre Nós</Link>
            <button className={styles.logoutBtn}>Sair</button>
          </nav>
        </div>
      </div>
    </>
  );
}
