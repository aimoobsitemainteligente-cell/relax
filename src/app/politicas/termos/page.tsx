import styles from "../page.module.css";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function TermosPage() {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Termos de Uso</h1>
      <p className={styles.subtitle}>Atualizado em Janeiro de 2026 • Diretrizes gerais</p>

      <section className={styles.section}>
        <h2>1. Aceite dos Termos</h2>
        <p>Ao acessar o site, cadastrar-se ou realizar compras na Loja Relax, você, usuário, concorda integral e expressamente com os presentes Termos de Uso e Condições de Serviço. Recomendamos a leitura atenta deste documento antes de efetuar qualquer transação na plataforma.</p>
      </section>

      <section className={styles.section}>
        <h2>2. Acesso a Conteúdo Sensível (+18)</h2>
        <p>Ao navegar por seções categorizadas como "Sex Shop" ou "Brinquedos Eróticos", o usuário declara expressamente ter idade igual ou superior a 18 (dezoito) anos, assumindo inteira responsabilidade civil e penal por qualquer falsidade ideológica nas informações prestadas.</p>
      </section>

      <section className={styles.section}>
        <h2>3. Precisão das Informações</h2>
        <p>A Loja Relax se esforça para garantir que as descrições de produtos, imagens e especificações sejam o mais exatas possível. No entanto, não garantimos que a descrição seja totalmente isenta de falhas. As cores exibidas podem variar conforme a tela do dispositivo utilizado.</p>
      </section>

      <section className={styles.section}>
        <h2>4. Pagamento</h2>
        <p>Oferecemos transações seguras através de PIX (com descontos aplicados), cartões de crédito em até 3x sem juros e boleto bancário. A liberação do pedido e respectiva entrega estão condicionadas à confirmação de pagamento por parte das instituições financeiras e processadores parceiros.</p>
      </section>

      <section className={styles.section}>
        <h2>5. Entrega</h2>
        <p>Realizamos entregas na cidade de Rio das Ostras-RJ com a nossa modalidade Flash (Full 2h) para produtos selecionados. Para as demais cidades do Brasil, o prazo estimado varia de 2 a 5 dias úteis, dependendo da região e dos serviços de logística parceiros envolvidos no transporte.</p>
      </section>

      <section className={styles.section}>
        <h2>6. Propriedade Intelectual</h2>
        <p>Todo o conteúdo disponibilizado no site da Loja Relax, incluindo textos, logotipos, imagens, layout das páginas e códigos-fonte, são de propriedade intelectual exclusiva da nossa marca ou estão licenciados. Qualquer uso não autorizado de tais conteúdos constitui infração legal.</p>
      </section>

      <section className={styles.section}>
        <h2>7. Limitação de Responsabilidade</h2>
        <p>A Loja Relax atua em estrita conformidade legal para garantir a máxima segurança dos sistemas. No entanto, não nos responsabilizamos por instabilidades temporárias nos provedores de internet do usuário ou eventuais incompatibilidades de dispositivos que possam afetar a navegação na plataforma.</p>
      </section>

      <div className={styles.supportBox}>
        <h3>Dúvidas sobre nossos termos?</h3>
        <p>Nossa equipe de suporte está à disposição para esclarecer qualquer ponto das nossas diretrizes de uso, assegurando uma experiência de compra tranquila e transparente.</p>
        <Link href="/contato">
          <Button size="lg">FALAR NO SUPORTE</Button>
        </Link>
      </div>
    </article>
  );
}
