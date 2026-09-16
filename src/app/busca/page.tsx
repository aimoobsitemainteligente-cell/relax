"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { MobileFilterDrawer } from "@/components/ui/MobileFilterDrawer";

// Mock data based on Figma search results for "vibrador"
const SEARCH_RESULTS = [
  { id: 1, name: "Vibrador Bullet Multivelocidades Silk Touch", price: "34,90", installment: "ou R$ 36,65 em até 3x sem juros" },
  { id: 2, name: "Vibrador Golfinho Aveludado Sensation", price: "89,90", installment: "ou R$ 94,40 em até 3x sem juros" },
  { id: 3, name: "Egg Thunder Stronger Estimulador", price: "38,00", installment: "ou R$ 39,90 em até 3x sem juros" },
  { id: 4, name: "Vibrador Varita Soft Magenta Max", price: "128,00", installment: "ou R$ 134,40 em até 3x sem juros" },
  { id: 5, name: "Anel Peniano Vibratório Power Glow", price: "29,90", installment: "ou R$ 31,39 em até 3x sem juros" },
  { id: 6, name: "Vibe Egg sem Fio Controle Remoto", price: "145,00", installment: "ou R$ 152,25 em até 3x sem juros" },
  { id: 7, name: "Vibrador Líquido Lubrificante Funcional", price: "22,50", installment: "ou R$ 23,62 em até 3x sem juros" },
  { id: 8, name: "Egg Thunder Stronger Estimulador", price: "38,00", installment: "ou R$ 39,90 em até 3x sem juros" }
];

export default function BuscaPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const query = "vibrador";
  const totalResults = 15;

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <span>Busca</span> &gt; <span>Resultados para "{query}"</span>
      </div>

      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h1 className={styles.title}>Resultados para "{query}"</h1>
          <span className={styles.count}>({totalResults} produtos encontrados)</span>
        </div>
        
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
      </div>
      
      <MobileFilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

      <div className={styles.productGrid}>
        {SEARCH_RESULTS.map((product) => (
          <ProductCard 
            key={product.id}
            name={product.name}
            price={product.price}
            badge="full2h"
          />
        ))}
      </div>

      <div className={styles.supportBanner}>
        <div className={styles.supportContent}>
          <h2>Não encontrou o que procura?</h2>
          <p>Nossa equipe está pronta para te atender e te dar dicas personalizadas. Temos muito mais novidades no nosso catálogo privado do WhatsApp!</p>
          <Button size="lg" className={styles.whatsappBtn}>Falar no WhatsApp</Button>
        </div>
      </div>
    </div>
  );
}
