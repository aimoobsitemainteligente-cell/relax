import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";

export default function SobrePage() {
  return (
    <div className={styles.container}>
      {/* Hero Institucional */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Nossa História</h1>
          <p className={styles.subtitle}>
            Acreditamos que o prazer é fundamental para o bem-estar e a autoconfiança. 
            Nascemos para quebrar tabus e democratizar a saúde íntima com produtos de alta qualidade, 
            tecnologia e segurança.
          </p>
        </div>
        <div className={styles.heroImagePlaceholder}></div>
      </section>

      {/* Valores */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionHeader}>
          <h2>No que acreditamos</h2>
        </div>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>✨</div>
            <h3>Qualidade Premium</h3>
            <p>Trabalhamos apenas com materiais seguros, antialérgicos e testados dermatologicamente.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🔒</div>
            <h3>Privacidade Absoluta</h3>
            <p>Do acesso ao site até a entrega na sua porta. Embalagens 100% discretas sem лого ou identificação.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>💬</div>
            <h3>Atendimento Humanizado</h3>
            <p>Sem robôs. Uma equipe especializada pronta para tirar suas dúvidas sobre qualquer produto.</p>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <h2>Nossa Missão</h2>
          <p>
            Proporcionar experiências únicas e elevar a autoestima de milhares de pessoas, 
            oferecendo um catálogo curado com o que há de melhor no mercado global de bem-estar íntimo.
          </p>
          <Button size="lg" className={styles.missionBtn}>Conhecer Produtos</Button>
        </div>
      </section>
    </div>
  );
}
