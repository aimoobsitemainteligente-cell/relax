"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { MobileFilterDrawer } from "@/components/ui/MobileFilterDrawer";

export function SearchControls() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <div className={styles.sortControl}>
        <label className={styles.desktopSortLabel}>Ordenar por:</label>
        <select defaultValue="relevancia" className={styles.desktopSortSelect}>
          <option value="relevancia">Relevância</option>
          <option value="menor_preco">Menor Preço</option>
          <option value="maior_preco">Maior Preço</option>
          <option value="mais_vendidos">Mais Vendidos</option>
        </select>
        <button className={styles.mobileFilterBtn} onClick={() => setIsFilterOpen(true)}>
          Filtros ▾
        </button>
      </div>
      
      <MobileFilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </>
  );
}
