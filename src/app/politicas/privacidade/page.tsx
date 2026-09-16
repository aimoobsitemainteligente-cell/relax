import styles from "../page.module.css";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function PrivacidadePage() {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Política de Privacidade</h1>
      <p className={styles.subtitle}>Atualizado em Janeiro de 2026 • Em conformidade com a LGPD</p>

      <section className={styles.section}>
        <h2>1. Dados que coletamos</h2>
        <p>Coletamos apenas as informações estritamente necessárias para processar e entregar seus pedidos com segurança e discrição. Estes dados incluem seu nome completo, e-mail para contato, CPF (exigido por lei para faturamento), endereço de entrega e histórico de compras em nossa plataforma.</p>
      </section>

      <section className={styles.section}>
        <h2>2. Como usamos seus dados</h2>
        <p>Os dados fornecidos são utilizados para o processamento de pedidos, entrega rápida nas áreas atendidas de Rio das Ostras-RJ, faturamento, comunicação de status de entrega e envio de promoções exclusivas, quando previamente autorizado por você de forma livre e explícita.</p>
      </section>

      <section className={styles.section}>
        <h2>3. Compartilhamento de dados</h2>
        <p>Garantimos total confidencialidade. Seus dados pessoais nunca serão vendidos ou comercializados. Compartilhamos informações unicamente com processadores de pagamentos parceiros e com os agentes logísticos responsáveis pela entrega do seu pacote, limitando-se ao essencial.</p>
      </section>

      <section className={styles.section}>
        <h2>4. Cookies</h2>
        <p>Utilizamos cookies de navegação para aprimorar sua experiência de uso na nossa boutique digital. Os cookies servem para memorizar suas preferências de idioma, itens adicionados temporariamente no carrinho de compras e analisar de forma agregada e anônima o tráfego em nossas páginas.</p>
      </section>

      <section className={styles.section}>
        <h2>5. Seus direitos (LGPD)</h2>
        <p>Em total conformidade com a Lei Geral de Proteção de Dados (LGPD), asseguramos o livre exercício dos seus direitos de acesso, retificação de dados incorretos, exclusão permanente de sua conta e dos dados que não sejam necessários por guarda legal, além da portabilidade.</p>
      </section>

      <section className={styles.section}>
        <h2>6. Segurança</h2>
        <p>Adotamos rígidos padrões de segurança digital, incluindo criptografia SSL em todas as etapas de navegação e ambiente de checkout certificado. Nossas bases de dados são mantidas em servidores altamente protegidos para evitar vazamentos, acessos indevidos e perda de dados.</p>
      </section>

      <section className={styles.section}>
        <h2>7. Contato do DPO</h2>
        <p>Se você tiver perguntas sobre o tratamento dos seus dados ou quiser exercer seus direitos previstos pela LGPD, entre em contato diretamente com o nosso Encarregado pelo Tratamento de Dados Pessoais (DPO) através do e-mail específico: dpo@lojarelax.com.br.</p>
      </section>

      <div className={styles.supportBox}>
        <h3>Quer exercer seus direitos?</h3>
        <p>Você tem o controle absoluto sobre as suas informações pessoais. Caso queira solicitar a exportação, alteração ou exclusão dos seus dados cadastrados, acione o nosso time.</p>
        <Link href="/contato">
          <Button size="lg">CHAMAR NO WHATSAPP</Button>
        </Link>
      </div>
    </article>
  );
}
