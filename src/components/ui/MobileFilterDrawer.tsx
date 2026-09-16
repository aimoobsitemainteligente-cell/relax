"use client";

import { useState } from "react";
import styles from "./MobileFilterDrawer.module.css";
import { Button } from "./Button";

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileFilterDrawer({ isOpen, onClose }: MobileFilterDrawerProps) {
  const [openSection, setOpenSection] = useState<string>('categorias');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section);
  };

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose}></div>}
      
      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <h2>Filtros</h2>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>

        <div className={styles.content}>
          <div className={styles.section}>
            <button className={styles.sectionHeader} onClick={() => toggleSection('categorias')}>
              <h3>Categorias</h3>
              <span className={styles.chevron}>{openSection === 'categorias' ? '−' : '+'}</span>
            </button>
            {openSection === 'categorias' && (
              <div className={styles.sectionBody}>
                <label className={styles.radioLabel}><input type="radio" name="cat" defaultChecked /> Lingerie</label>
                <label className={styles.radioLabel}><input type="radio" name="cat" /> Moda Íntima</label>
                <label className={styles.radioLabel}><input type="radio" name="cat" /> Acessórios</label>
                <label className={styles.radioLabel}><input type="radio" name="cat" /> Sex Shop</label>
              </div>
            )}
          </div>

          <div className={styles.section}>
            <button className={styles.sectionHeader} onClick={() => toggleSection('tamanho')}>
              <h3>Tamanho</h3>
              <span className={styles.chevron}>{openSection === 'tamanho' ? '−' : '+'}</span>
            </button>
            {openSection === 'tamanho' && (
              <div className={styles.sectionBodyRow}>
                <button className={styles.sizeBtnActive}>P</button>
                <button className={styles.sizeBtn}>M</button>
                <button className={styles.sizeBtn}>G</button>
                <button className={styles.sizeBtn}>GG</button>
              </div>
            )}
          </div>

          <div className={styles.section}>
            <button className={styles.sectionHeader} onClick={() => toggleSection('preco')}>
              <h3>Faixa de Preço</h3>
              <span className={styles.chevron}>{openSection === 'preco' ? '−' : '+'}</span>
            </button>
            {openSection === 'preco' && (
              <div className={styles.sectionBody}>
                <div className={styles.rangeLabels}>
                  <span>R$ 0</span>
                  <span>R$ 500</span>
                </div>
                <input type="range" min="0" max="500" className={styles.rangeInput} />
              </div>
            )}
          </div>

          <div className={styles.section}>
            <button className={styles.sectionHeader} onClick={() => toggleSection('ordernar')}>
              <h3>Ordenar por</h3>
              <span className={styles.chevron}>{openSection === 'ordernar' ? '−' : '+'}</span>
            </button>
            {openSection === 'ordernar' && (
              <div className={styles.sectionBody}>
                <label className={styles.radioLabel}><input type="radio" name="sort" defaultChecked /> Mais Vendidos</label>
                <label className={styles.radioLabel}><input type="radio" name="sort" /> Menor Preço</label>
                <label className={styles.radioLabel}><input type="radio" name="sort" /> Maior Preço</label>
                <label className={styles.radioLabel}><input type="radio" name="sort" /> Novidades</label>
              </div>
            )}
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.clearBtn} onClick={onClose}>Limpar Filtros</button>
          <Button onClick={onClose} className={styles.applyBtn}>Aplicar Filtros</Button>
        </div>
      </div>
    </>
  );
}
