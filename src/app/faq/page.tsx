"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
  isOpen?: boolean;
}

function FAQItem({ question, answer, isOpen = false }: FAQItemProps) {
  const [open, setOpen] = useState(isOpen);
  return (
    <div className={`${styles.faqItem} ${open ? styles.open : ""}`}>
      <button className={styles.faqQuestion} onClick={() => setOpen(!open)}>
        {question}
        <span className={styles.icon}>{open ? "−" : "+"}</span>
      </button>
      {open && <div className={styles.faqAnswer}>{answer}</div>}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <section className={styles.header}>
        <h1 className={styles.title}>Central de Ajuda</h1>
        <p className={styles.subtitle}>Como podemos te ajudar hoje?</p>
        
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Buscar sua dúvida..." className={styles.searchInput} />
        </div>
      </section>

      <section className={styles.content}>
        {/* Topics */}
        <div className={styles.topicsGrid}>
          <div className={styles.topicCard}>
            <div className={styles.topicIcon}>🚚</div>
            <h3>Entrega</h3>
            <p>Prazo, taxas e frete grátis</p>
          </div>
          <div className={styles.topicCard}>
            <div className={styles.topicIcon}>💳</div>
            <h3>Pagamento</h3>
            <p>PIX, Cartão e parcelamento</p>
          </div>
          <div className={styles.topicCard}>
            <div className={styles.topicIcon}>🔄</div>
            <h3>Trocas</h3>
            <p>Como solicitar devoluções</p>
          </div>
          <div className={styles.topicCard}>
            <div className={styles.topicIcon}>👤</div>
            <h3>Minha Conta</h3>
            <p>Cadastro, pedidos e dados</p>
          </div>
        </div>

        {/* FAQs */}
        <div className={styles.faqSection}>
          <h2>Entrega e Frete</h2>
          <div className={styles.faqList}>
            <FAQItem 
              question="Qual o prazo de entrega?"
              answer={
                <>
                  <p>Para Rio das Ostras, entregamos em até 2 horas!</p>
                  <p>Para outras cidades do RJ, de 2 a 5 dias úteis.</p>
                  <p>As entregas ocorrem de segunda a sábado das 9h às 21h.</p>
                </>
              }
              isOpen={true}
            />
            <FAQItem 
              question="O frete é grátis?"
              answer="Oferecemos frete grátis para Rio das Ostras em compras acima de R$ 150,00."
            />
            <FAQItem 
              question="Como rastrear meu pedido?"
              answer="Você pode acompanhar o status na seção 'Meus Pedidos' da sua conta."
            />
          </div>
        </div>

        <div className={styles.faqSection}>
          <h2>Trocas e Devoluções</h2>
          <div className={styles.faqList}>
            <FAQItem 
              question="Como faço uma troca?"
              answer="Acesse 'Meus Pedidos' e clique em 'Solicitar Troca' no pedido desejado."
            />
            <FAQItem 
              question="Qual o prazo para devolução?"
              answer="Você tem até 7 dias corridos após o recebimento para solicitar devoluções."
            />
          </div>
        </div>

        <div className={styles.faqSection}>
          <h2>Pagamento</h2>
          <div className={styles.faqList}>
            <FAQItem 
              question="Quais formas de pagamento aceitas?"
              answer="Aceitamos PIX e todos os principais cartões de crédito."
            />
            <FAQItem 
              question="Tem desconto no PIX?"
              answer="Sim! Pagamentos via PIX possuem 5% de desconto automático."
            />
            <FAQItem 
              question="Posso parcelar?"
              answer="Sim, parcelamos em até 3x sem juros no cartão de crédito."
            />
          </div>
        </div>

        {/* Support Banner */}
        <div className={styles.supportBanner}>
          <h2>Não encontrou sua resposta?</h2>
          <p>Fale com a nossa equipe de suporte agora mesmo para tirar suas dúvidas de forma rápida e discreta.</p>
          <Button size="lg" onClick={() => window.location.href = '/contato'}>Falar com a gente</Button>
        </div>
      </section>
    </div>
  );
}
