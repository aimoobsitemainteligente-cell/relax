import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";

export default function ProductDetailsPage() {
  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <span>Home</span> &gt; <span>Lingeries</span> &gt; <span className={styles.current}>Conjunto Sensuale Renda Preta</span>
      </div>

      <div className={styles.mainGrid}>
        {/* Galeria de Imagens */}
        <div className={styles.gallery}>
          <div className={styles.thumbnails}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={styles.thumbPlaceholder}></div>
            ))}
          </div>
          <div className={styles.mainImagePlaceholder}></div>
        </div>

        {/* Informações do Produto */}
        <div className={styles.info}>
          <h1 className={styles.title}>Conjunto Sensuale Renda Preta</h1>
          <div className={styles.reviews}>
            <span className={styles.stars}>★★★★★</span>
            <span className={styles.reviewCount}>(24 avaliações)</span>
          </div>
          
          <div className={styles.pricing}>
            <span className={styles.oldPrice}>R$ 189,90</span>
            <span className={styles.currentPrice}>R$ 149,90</span>
            <span className={styles.installment}>ou 6x de R$ 24,98 sem juros</span>
          </div>

          <div className={styles.description}>
            <p>Conjunto elegante em renda antialérgica com detalhes em strappy. Desenvolvido para modelar o corpo com extremo conforto e sensualidade. Não possui bojo, realçando a beleza natural.</p>
          </div>

          <div className={styles.options}>
            <div className={styles.optionGroup}>
              <label>Cor: <strong>Preto</strong></label>
              <div className={styles.colorOptions}>
                <button className={`${styles.colorBtn} ${styles.active}`} style={{ backgroundColor: '#000' }}></button>
                <button className={styles.colorBtn} style={{ backgroundColor: '#d32f2f' }}></button>
                <button className={styles.colorBtn} style={{ backgroundColor: '#fff' }}></button>
              </div>
            </div>

            <div className={styles.optionGroup}>
              <div className={styles.sizeHeader}>
                <label>Tamanho</label>
                <button className={styles.sizeGuideBtn}>Guia de Medidas</button>
              </div>
              <div className={styles.sizeOptions}>
                {['P', 'M', 'G', 'GG'].map((size) => (
                  <button key={size} className={styles.sizeBtn}>{size}</button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.purchaseActions}>
            <div className={styles.quantitySelector}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <Button size="lg" fullWidth>Adicionar ao Carrinho</Button>
          </div>

          <div className={styles.shippingCalc}>
            <label>Calcular Frete e Prazo</label>
            <div className={styles.shippingInputGroup}>
              <input type="text" placeholder="Digite seu CEP" />
              <Button variant="outline">Calcular</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs de Detalhes */}
      <section className={styles.tabsSection}>
        <div className={styles.tabHeaders}>
          <button className={`${styles.tabBtn} ${styles.active}`}>Detalhes</button>
          <button className={styles.tabBtn}>Como Cuidar</button>
          <button className={styles.tabBtn}>Avaliações</button>
        </div>
        <div className={styles.tabContent}>
          <ul>
            <li>Renda premium 90% Poliamida, 10% Elastano.</li>
            <li>Forro 100% algodão.</li>
            <li>Alças reguláveis com metais banhados (não enferrujam).</li>
            <li>Acompanha calcinha fio duplo.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
