import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.title}>Relax Sexshop</h3>
          <p className={styles.text}>A sua loja mais íntima, com os melhores produtos e entrega discreta.</p>
        </div>
        
        <div className={styles.column}>
          <h4 className={styles.subtitle}>Institucional</h4>
          <Link href="/sobre" className={styles.link}>Sobre Nós</Link>
          <Link href="/politica-de-privacidade" className={styles.link}>Política de Privacidade</Link>
          <Link href="/termos-de-uso" className={styles.link}>Termos de Uso</Link>
        </div>
        
        <div className={styles.column}>
          <h4 className={styles.subtitle}>Ajuda</h4>
          <Link href="/faq" className={styles.link}>Dúvidas Frequentes</Link>
          <Link href="/trocas" className={styles.link}>Trocas e Devoluções</Link>
          <Link href="/rastreio" className={styles.link}>Rastrear Pedido</Link>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Relax Sexshop. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
