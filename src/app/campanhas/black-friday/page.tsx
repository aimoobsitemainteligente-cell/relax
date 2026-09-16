import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";

const BEST_SELLERS = [
  { id: 1, name: "Conjunto Rendado Desire Vermelho", oldPrice: "189,90", price: "94,95", discount: "50% OFF" },
  { id: 2, name: "Sutiã Soft Support Conforto Rose", oldPrice: "129,90", price: "77,94", discount: "40% OFF" },
  { id: 3, name: "Body Amore Preto sem Bojo", oldPrice: "219,90", price: "87,96", discount: "60% OFF" },
  { id: 4, name: "Kit 3 Calcinhas Algodão Sensação", oldPrice: "99,90", price: "59,94", discount: "40% OFF" }
];

export default function BlackFridayPage() {
  return (
    <div className={styles.container}>
      {/* Top Banner */}
      <div className={styles.topBanner}>
        <span>🔥 ESTOQUE LIMITADO — OFERTAS VÁLIDAS ATÉ 30/11 OU ENQUANTO DURAREM OS ESTOQUES!</span>
      </div>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badgeDiscount}>ATÉ 60% OFF</div>
          <h1 className={styles.title}>BLACK FRIDAY RELAX</h1>
          <p className={styles.subtitle}>OFERTAS ESPECIAIS JÁ ATIVAS</p>
          
          <div className={styles.countdown}>
            <div className={styles.timeBlock}>
              <span className={styles.timeNumber}>03</span>
              <span className={styles.timeLabel}>DIAS</span>
            </div>
            <div className={styles.timeBlock}>
              <span className={styles.timeNumber}>12</span>
              <span className={styles.timeLabel}>HRS</span>
            </div>
            <div className={styles.timeBlock}>
              <span className={styles.timeNumber}>45</span>
              <span className={styles.timeLabel}>MIN</span>
            </div>
            <div className={styles.timeBlock}>
              <span className={styles.timeNumber}>30</span>
              <span className={styles.timeLabel}>SEG</span>
            </div>
          </div>
          
          <p className={styles.description}>
            Combine estilo, luxo e o conforto inconfundível que você já conhece com descontos arrebatadores de até 60% OFF. Estoque limitado para garantir suas peças preferidas.
          </p>
          
          <Button size="lg" className={styles.heroBtn}>QUERO GARANTIR MINHAS PEÇAS</Button>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Ofertas por Categoria</h2>
        <div className={styles.categoryGrid}>
          <div className={styles.categoryCard}>
            <div className={styles.categoryImage}></div>
            <div className={styles.categoryContent}>
              <h3>Sutiãs até 50% OFF</h3>
              <button className={styles.btnOutline}>VER OFERTAS</button>
            </div>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.categoryImage}></div>
            <div className={styles.categoryContent}>
              <h3>Calcinhas até 40% OFF</h3>
              <button className={styles.btnOutline}>VER OFERTAS</button>
            </div>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.categoryImage}></div>
            <div className={styles.categoryContent}>
              <h3>Conjuntos até 60% OFF</h3>
              <button className={styles.btnOutline}>VER OFERTAS</button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className={styles.sectionDark}>
        <div className={styles.innerSection}>
          <h2 className={styles.sectionTitleLight}>Mais Vendidos da Black</h2>
          <div className={styles.productGrid}>
            {BEST_SELLERS.map(product => (
              <ProductCard 
                key={product.id}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                badge="discount"
                discountLabel={product.discount}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Box */}
      <section className={styles.section}>
        <div className={styles.promoBox}>
          <div className={styles.promoContent}>
            <span className={styles.promoTag}>PROMOÇÃO EXCLUSIVA</span>
            <h2>Monte seu Kit: Leve 3, Pague 2</h2>
            <p>Combine os modelos que você mais ama! Adicione 3 calcinhas ou sutiãs participantes da promoção no seu carrinho e a de menor valor sairá inteiramente de graça.</p>
            <Button size="lg">MONTE SEU KIT</Button>
          </div>
          <div className={styles.promoImage}>
            <div className={styles.promoPlaceholder}></div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>🚚</div>
          <h4>Frete Grátis</h4>
          <p>Nas compras acima de R$ 199</p>
        </div>
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>🔄</div>
          <h4>Troca Fácil</h4>
          <p>Até 30 dias após a entrega</p>
        </div>
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>🔒</div>
          <h4>Pagamento Seguro</h4>
          <p>Até 12x no cartão ou Pix</p>
        </div>
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>💎</div>
          <h4>Atendimento VIP</h4>
          <p>Suporte prioritário via WhatsApp</p>
        </div>
      </section>

      {/* VIP List */}
      <section className={styles.vipSection}>
        <div className={styles.vipBox}>
          <h2>Quer acesso antecipado?</h2>
          <p>Inscreva-se na nossa lista VIP de Black Friday e receba os links das ofertas 2 horas antes de todo mundo diretamente no seu e-mail.</p>
          <div className={styles.vipForm}>
            <input type="email" placeholder="Digite seu e-mail principal..." />
            <Button>QUERO ACESSO ANTECIPADO</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
