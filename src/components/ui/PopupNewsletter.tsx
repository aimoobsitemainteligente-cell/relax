"use client";

import { useState, useEffect } from "react";
import styles from "./PopupNewsletter.module.css";
import { Button } from "./Button";

export function PopupNewsletter() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simulando que o modal abre após 3 segundos
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>×</button>
        
        <div className={styles.imageSide}>
          {/* Placeholder for the product image */}
        </div>
        
        <div className={styles.contentSide}>
          <h2 className={styles.title}>Ganhe 10% OFF na primeira compra!</h2>
          <p className={styles.description}>
            Cadastre-se e receba ofertas exclusivas e novidades da Loja Relax diretamente no seu e-mail.
          </p>
          
          <form className={styles.form} onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
            <input type="email" placeholder="seu@email.com" required />
            <Button type="submit" className={styles.btnSubmit}>QUERO MEU DESCONTO</Button>
          </form>
          
          <p className={styles.footerText}>
            Ao se cadastrar, você concorda com nossa Política de Privacidade.
          </p>
        </div>
      </div>
    </div>
  );
}
