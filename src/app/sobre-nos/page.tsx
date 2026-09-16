import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";

export default function SobreNosPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Sobre a Loja Relax</h1>
          <p className={styles.subtitle}>
            Cuidado íntimo, bem-estar e sofisticação no coração de Rio das Ostras.
          </p>
        </div>
      </section>

      {/* História e Missão */}
      <section className={styles.sectionText}>
        <div className={styles.textBlock}>
          <h2>Nossa História</h2>
          <p>
            Nascemos em Rio das Ostras - RJ, com o desejo de criar um espaço onde a intimidade, o prazer e o autocuidado pudessem ser conversados de forma leve, natural e sofisticada. Começamos selecionando as lingeries mais delicadas e expandimos nossa curadoria para cosméticos sensuais e bem-estar íntimo.
          </p>
          <p>
            Hoje, somos a principal referência local para quem busca qualidade, sofisticação e, acima de tudo, respeito e discrição total em cada entrega rápida.
          </p>
        </div>
        
        <div className={styles.textBlock}>
          <h2>Nossa Missão</h2>
          <p>
            Empoderar pessoas a explorarem sua intimidade com confiança e conforto. Acreditamos que a lingerie ideal e o autocuidado sensual transformam a autoestima. Queremos que você se sinta relaxada, segura e apaixonada por si mesma todos os dias.
          </p>
        </div>
      </section>

      {/* Estatísticas */}
      <section className={styles.statsSection}>
        <div className={styles.statItem}>
          <h3 className={styles.statNumber}>5.000+</h3>
          <p className={styles.statLabel}>Clientes Satisfeitas</p>
        </div>
        <div className={styles.statItem}>
          <h3 className={styles.statNumber}>10.000+</h3>
          <p className={styles.statLabel}>Pedidos Entregues</p>
        </div>
        <div className={styles.statItem}>
          <h3 className={styles.statNumber}>4.9 ★</h3>
          <p className={styles.statLabel}>Avaliação Média</p>
        </div>
        <div className={styles.statItem}>
          <h3 className={styles.statNumber}>Até 2h</h3>
          <p className={styles.statLabel}>Entrega Expressa Local</p>
        </div>
      </section>

      {/* Por que comprar conosco? */}
      <section className={styles.reasonsSection}>
        <h2 className={styles.sectionTitleCenter}>Por que comprar conosco?</h2>
        <div className={styles.reasonsGrid}>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>⚡</div>
            <h4>Entrega Full 2h</h4>
            <p>Receba seus mimos no mesmo dia, rápido e seguro em Rio das Ostras.</p>
          </div>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>📦</div>
            <h4>Embalagem Discreta</h4>
            <p>Suas compras protegidas e entregues sem identificação externa.</p>
          </div>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>🔒</div>
            <h4>Pagamento Seguro</h4>
            <p>Pague com segurança via PIX ou cartões de crédito em até 3x sem juros.</p>
          </div>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>💬</div>
            <h4>Atendimento Humanizado</h4>
            <p>Suporte personalizado para esclarecer qualquer dúvida de forma acolhedora.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Explore as Novidades</h2>
          <p>
            Encontre o equilíbrio ideal entre conforto, elegância e prazer. Confira nosso catálogo completo e aproveite a entrega expressa.
          </p>
          <Button size="lg">Conheça nossos produtos</Button>
        </div>
      </section>
    </div>
  );
}
