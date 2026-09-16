import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";

export default function ContatoPage() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <section className={styles.header}>
        <h1 className={styles.title}>Fale Conosco</h1>
        <p className={styles.subtitle}>
          Estamos aqui para tirar suas dúvidas de maneira privada, rápida e discreta.
        </p>
      </section>

      <section className={styles.content}>
        {/* Info Cards */}
        <div className={styles.infoCards}>
          <div className={styles.card}>
            <div className={styles.icon}>📱</div>
            <h3>WhatsApp Suporte</h3>
            <p className={styles.highlight}>(22) 99967-4947</p>
            <p>Atendimento instantâneo e discreto para dúvidas ou compras rápidas.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>📧</div>
            <h3>E-mail Oficial</h3>
            <p className={styles.highlight}>contato@lojarelax.com.br</p>
            <p>Escreva para nós sobre parcerias, pós-venda, dúvidas gerais ou trocas.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>📍</div>
            <h3>Sede em Rio das Ostras-RJ</h3>
            <p className={styles.highlight}>
              Rua Dr. Ricardo Borriega, 371<br />
              Atlântica, Rio das Ostras - RJ
            </p>
            <p>Seg a Sex: 09:00 às 22:00 | Sáb: 09:00 às 18:00</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.formContainer}>
          <h2>Mande uma Mensagem</h2>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label>Nome Completo</label>
              <input type="text" placeholder="Ex: Kelly Cavalcante" />
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>E-mail de Contato</label>
                <input type="email" placeholder="seuemail@exemplo.com" />
              </div>
              <div className={styles.inputGroup}>
                <label>Telefone / WhatsApp</label>
                <input type="tel" placeholder="(22) 99999-9999" />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Assunto do Contato</label>
              <select defaultValue="Dúvidas sobre produtos">
                <option value="Dúvidas sobre produtos">Dúvidas sobre produtos</option>
                <option value="Trocas e devoluções">Trocas e devoluções</option>
                <option value="Problemas com pedido">Problemas com pedido</option>
                <option value="Sugestão / Parceria">Sugestão / Parceria</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Sua Mensagem</label>
              <textarea placeholder="Escreva aqui sua dúvida ou solicitação..." rows={5}></textarea>
            </div>

            <Button size="lg" type="submit" className={styles.submitBtn}>
              ENVIAR MENSAGEM
            </Button>
          </form>
        </div>

        {/* Map Placeholder */}
        <div className={styles.mapContainer}>
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapInfo}>
              <h3>Localização física</h3>
              <p>Rua Dr. Ricardo Borriega, 371</p>
              <p>Bairro Atlântica, Rio das Ostras - RJ • CEP 28890-000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
