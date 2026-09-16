"use client";

import { useState, useEffect } from "react";
import styles from "./PopupCookies.module.css";
import { Button } from "./Button";

export function PopupCookies() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.cookieBar}>
      <div className={styles.content}>
        <p>
          Usamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa Política de Cookies.
        </p>
        <div className={styles.actions}>
          <button className={styles.btnConfig} onClick={() => setIsOpen(false)}>Configurar</button>
          <Button onClick={() => setIsOpen(false)}>Aceitar Todos</Button>
        </div>
      </div>
    </div>
  );
}
