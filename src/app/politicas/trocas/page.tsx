import styles from "../page.module.css";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function PoliticaTrocasPage() {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Política de Trocas e Devoluções</h1>
      <p className={styles.subtitle}>Atualizado em Janeiro de 2026 • Em conformidade com o CDC</p>

      <section className={styles.section}>
        <h2>1. Considerações Iniciais</h2>
        <p>A Loja Relax valoriza a satisfação total e o conforto dos nossos clientes. Criamos nossa política de trocas e devoluções respeitando rigorosamente o Código de Defesa do Consumidor (CDC), garantindo um processo transparente, rápido e totalmente discreto para você em Rio das Ostras e em todo o Brasil.</p>
      </section>

      <section className={styles.section}>
        <h2>2. Arrependimento da Compra (Prazo de 7 dias)</h2>
        <p>De acordo com o Art. 49 do CDC, nas compras online você tem o direito de se arrepender e solicitar a devolução do produto em até 7 (sete) dias corridos a contar da data de recebimento do pacote.</p>
        <p>Para que o estorno seja aprovado, o produto deve estar obrigatoriamente na embalagem original, sem qualquer indício de uso, com o lacre de fábrica inviolado e acompanhado de todos os acessórios e nota fiscal.</p>
      </section>

      <section className={styles.section}>
        <h2>3. Produtos Íntimos e Cosméticos</h2>
        <p>Por questões de saúde, higiene e segurança sanitária, **NÃO REALIZAMOS TROCAS** ou devoluções de lingeries (calcinhas, bodies), brinquedos eróticos (vibradores, dildos) e cosméticos beijáveis ou íntimos que tenham tido o lacre de proteção rompido ou indício de uso ou experimentação.</p>
        <p>Pedimos especial atenção no momento de escolher tamanhos e fragrâncias.</p>
      </section>

      <section className={styles.section}>
        <h2>4. Produto com Defeito de Fabricação</h2>
        <p>Caso o seu produto apresente algum defeito de fabricação ou não funcione conforme o esperado logo ao abrir a caixa, você tem até 30 (trinta) dias corridos para solicitar a troca ou reparo conosco.</p>
        <p>O produto será analisado pelo nosso setor de qualidade e, constatado o defeito, realizaremos a troca por um item novo igual ou a devolução integral do valor (incluindo frete).</p>
      </section>

      <section className={styles.section}>
        <h2>5. Como Solicitar</h2>
        <p>O processo é simples e discreto. Acesse a área de "Meus Pedidos" em "Minha Conta", selecione o pedido correspondente e clique no botão "Solicitar Troca/Devolução". Siga os passos e aguarde nosso contato no e-mail ou WhatsApp oficial em até 24h úteis.</p>
      </section>

      <div className={styles.supportBox}>
        <h3>Dúvidas sobre sua troca?</h3>
        <p>Nosso time de suporte está pronto para analisar seu caso de forma rápida e confidencial.</p>
        <Link href="/contato">
          <Button size="lg">FALAR COM SUPORTE</Button>
        </Link>
      </div>
    </article>
  );
}
