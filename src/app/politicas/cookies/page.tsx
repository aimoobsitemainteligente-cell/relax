import styles from "../page.module.css";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function CookiesPage() {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Política de Cookies</h1>
      <p className={styles.subtitle}>Atualizado em Janeiro de 2026 • Transparência e respeito à sua privacidade</p>

      <section className={styles.section}>
        <h2>1. O que são cookies?</h2>
        <p>Cookies são pequenos arquivos de texto baixados em seu computador ou dispositivo móvel quando você visita um site. Eles ajudam a tornar o site mais utilizável e seguro, além de fornecer aos proprietários dados de navegação para melhorar as velocidades de carregamento e personalizar a experiência de compra.</p>
      </section>

      <section className={styles.section}>
        <h2>2. Cookies que utilizamos</h2>
        <p>Garantimos total discrição em todas as suas interações na Loja Relax. Os cookies utilizados em nosso site são classificados conforme a tabela abaixo:</p>
        
        <table className={styles.cookieTable}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Finalidade</th>
              <th>Duração</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>session_id</td>
              <td>Necessário</td>
              <td>Mantém itens no carrinho e sua conta conectada.</td>
              <td>Sessão</td>
            </tr>
            <tr>
              <td>analytics_perf</td>
              <td>Desempenho</td>
              <td>Avaliar o tráfego do site para otimizar as páginas.</td>
              <td>30 dias</td>
            </tr>
            <tr>
              <td>relax_cookies</td>
              <td>Preferências</td>
              <td>Registra suas escolhas de consentimento de cookies.</td>
              <td>1 ano</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h2>3. Como gerenciar seus cookies</h2>
        <p>A maioria dos navegadores permite que você controle cookies através de suas preferências de configuração. Se você optar por bloquear todos os cookies, o site da Loja Relax poderá apresentar limitações operacionais básicas, como a impossibilidade de manter itens salvos em seu carrinho de compras ou de acessar sua área de cadastro segura.</p>
      </section>

      <section className={styles.section}>
        <h2>4. Cookies de terceiros</h2>
        <p>Para facilitar nossas entregas rápidas de até 2h e viabilizar o suporte em tempo real, integramos soluções confiáveis como ferramentas de atendimento do WhatsApp e recursos de análise estatística de pagamentos no PIX e cartão. Essas ferramentas também utilizam cookies pontuais para garantir que a transação ocorra de modo rápido e 100% seguro.</p>
      </section>

      <div className={styles.supportBox}>
        <h3>Dúvidas sobre sua Privacidade?</h3>
        <p>Nosso encarregado de Proteção de Dados está sempre disponível para explicar de que maneira zelamos por suas informações de forma segura e discreta.</p>
        <Link href="/contato">
          <Button size="lg">FALAR NO ATENDIMENTO</Button>
        </Link>
      </div>
    </article>
  );
}
