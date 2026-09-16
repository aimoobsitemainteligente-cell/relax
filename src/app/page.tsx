import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";

// Dados mockados baseados no Figma
const categorias = [
  "Sex Shop", "Conjuntos", "Lingerie", "Lubrificante", "Excitante", 
  "Vibrador", "Fantasia", "Body", "Baby Doll", "Camisola"
];

const destaques = [
  { id: 1, name: "Conjunto Rendado Intense Pink", price: "79,90", installment: "3x de R$ 26,63", qtySelector: false },
  { id: 2, name: "Bullet Multivelocidades Silk Touch", price: "34,90", installment: "3x de R$ 11,63", qtySelector: true, qty: 1 },
  { id: 3, name: "Babasoul Hidratante Beijável 150g", price: "42,75", installment: "3x de R$ 14,25", qtySelector: false },
  { id: 4, name: "Kit Sado Bandage Premium 5 Peças", price: "114,00", installment: "3x de R$ 38,00", qtySelector: true, qty: 2 },
  { id: 5, name: "Calcinha Personalizada Glam", price: "28,50", installment: "3x de R$ 9,50", qtySelector: false },
  { id: 6, name: "Sedenta por Tesão Gel Excitante 15ml", price: "14,25", installment: "3x de R$ 4,75", qtySelector: false },
  { id: 7, name: "Lingerie Rendada Sem Bojo Elegance", price: "56,05", installment: "3x de R$ 18,68", qtySelector: true, qty: 1 },
  { id: 8, name: "Egg Thunder Stronger Estimulador", price: "38,00", installment: "3x de R$ 12,66", qtySelector: false },
];

const ofertas = [
  { id: 1, name: "Babasoul Hidratante Beijável", oldPrice: "42,75", price: "29,90", discount: "30% OFF" },
  { id: 2, name: "Conjunto Rendado Luxo - Vermelho", oldPrice: "95,00", price: "66,50", discount: "30% OFF" },
  { id: 3, name: "Body Lace Noir Elegance", oldPrice: "75,00", price: "52,25", discount: "30% OFF" },
  { id: 4, name: "Pijama Soft Inverno Conforto", oldPrice: "90,00", price: "57,00", discount: "35% OFF" },
];

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Coleção de Inverno 2026</span>
          <h1 className={styles.title}>Até 50% OFF em Lingeries <br/>& Conjuntos Premium</h1>
          <p className={styles.subtitle}>
            Renove sua gaveta de intimidades com sofisticação e o conforto que você merece. Aproveite entrega rápida em Rio das Ostras.
          </p>
          <div className={styles.heroActions}>
            <button className={styles.btnWhite}>Ver Ofertas</button>
            <button className={styles.btnOutlineWhite}>Novidades</button>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroPlaceholder}></div>
        </div>
      </section>

      {/* Categorias */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>EXPLORE POR CATEGORIA</h2>
        </div>
        <div className={styles.categoriesRow}>
          {categorias.map((cat, i) => (
            <div key={i} className={styles.categoryItem}>
              <div className={styles.categoryCircle}></div>
              <span className={styles.categoryName}>{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className={styles.section}>
        <div className={styles.sectionHeaderFlex}>
          <h2 className={styles.sectionTitleBig}>Produtos em Destaque</h2>
          <button className={styles.linkVerTodos}>Ver Todos &rarr;</button>
        </div>
        <div className={styles.productGrid}>
          {destaques.map((item) => (
            <ProductCard 
              key={item.id}
              name={item.name}
              price={item.price}
              badge="full2h"
            />
          ))}
        </div>
      </section>

      {/* Middle Banner */}
      <section className={styles.featuresBanner}>
        <div className={styles.featureItem}>
          <div className={styles.featureIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 8H17V3H3V17H5V20H19V8Z" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <h4>FRETE GRÁTIS EM RIO DAS OSTRAS</h4>
            <p>Disponível para compras a partir de R$ 250,00.</p>
          </div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 3L4 14H12L11 21L20 10H12L13 3Z" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <h4>ENTREGA FLASH EM ATÉ 2 HORAS</h4>
            <p>Peça e receba rapidamente com total discrição na sua casa.</p>
          </div>
        </div>
      </section>

      {/* Ofertas Imperdíveis */}
      <section className={styles.section}>
        <div className={styles.sectionHeaderFlex}>
          <div className={styles.titleGroup}>
            <h2 className={styles.sectionTitleBig}>Ofertas Imperdíveis</h2>
            <span className={styles.badgeOfertas}>OFERTAS LIMITADAS</span>
          </div>
          <button className={styles.linkVerTodos}>Ver Todas &rarr;</button>
        </div>
        <div className={styles.productGrid}>
          {ofertas.map((item) => (
            <ProductCard 
              key={item.id}
              name={item.name}
              price={item.price}
              oldPrice={item.oldPrice}
              badge="discount"
              discountLabel={item.discount}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
