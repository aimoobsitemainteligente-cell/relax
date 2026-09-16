import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import prisma from "@/lib/prisma";

// Dados mockados baseados no Figma para Categorias
const categorias = [
  "Sex Shop", "Conjuntos", "Lingerie", "Lubrificante", "Excitante", 
  "Vibrador", "Fantasia", "Body", "Baby Doll", "Camisola"
];

export default async function Home() {
  const allProducts = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
    take: 12
  });

  const destaques = allProducts.slice(0, 8);
  const ofertas = allProducts.filter(p => p.oldPrice !== null).slice(0, 4);
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
              price={item.price.toFixed(2).replace('.', ',')}
              badge={item.badge || undefined}
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
              price={item.price.toFixed(2).replace('.', ',')}
              oldPrice={item.oldPrice ? item.oldPrice.toFixed(2).replace('.', ',') : undefined}
              badge="discount"
              discountLabel={item.badge || undefined}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
