import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";

export default function CheckoutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Finalizar Compra</h1>
      
      <div className={styles.checkoutLayout}>
        <div className={styles.checkoutForms}>
          {/* Identificação / Entrega */}
          <Card padding="lg" className={styles.formCard}>
            <h2>1. Identificação e Entrega</h2>
            <div className={styles.formGrid}>
              <Input label="Nome Completo" placeholder="Ex: Maria Silva" fullWidth />
              <Input label="CPF" placeholder="000.000.000-00" />
              <Input label="Telefone" placeholder="(00) 00000-0000" />
              <Input label="CEP" placeholder="00000-000" />
              
              <div className={styles.fullRow}>
                <Input label="Endereço" placeholder="Rua, Avenida..." fullWidth />
              </div>
              
              <Input label="Número" placeholder="123" />
              <Input label="Complemento" placeholder="Apto, Bloco..." />
              <Input label="Bairro" placeholder="Bairro" />
              <Input label="Cidade/UF" placeholder="São Paulo - SP" />
            </div>
            
            <div className={styles.shippingMethods}>
              <h3>Opções de Envio</h3>
              <label className={styles.radioOption}>
                <input type="radio" name="shipping" defaultChecked />
                <div className={styles.radioContent}>
                  <span className={styles.shippingTitle}>Frete Padrão (Embalagem Discreta)</span>
                  <span className={styles.shippingDesc}>Receba em até 5 dias úteis</span>
                </div>
                <span className={styles.shippingPrice}>R$ 15,90</span>
              </label>
              
              <label className={styles.radioOption}>
                <input type="radio" name="shipping" />
                <div className={styles.radioContent}>
                  <span className={styles.shippingTitle}>Frete Expresso (Embalagem Discreta)</span>
                  <span className={styles.shippingDesc}>Receba em até 2 dias úteis</span>
                </div>
                <span className={styles.shippingPrice}>R$ 35,90</span>
              </label>
            </div>
          </Card>

          {/* Pagamento */}
          <Card padding="lg" className={styles.formCard}>
            <h2>2. Pagamento</h2>
            
            <div className={styles.paymentMethods}>
              <button className={`${styles.paymentBtn} ${styles.active}`}>
                💳 Cartão de Crédito
              </button>
              <button className={styles.paymentBtn}>
                📱 PIX (5% OFF)
              </button>
              <button className={styles.paymentBtn}>
                📄 Boleto
              </button>
            </div>
            
            <div className={styles.creditCardForm}>
              <div className={styles.fullRow}>
                <Input label="Número do Cartão" placeholder="0000 0000 0000 0000" fullWidth />
              </div>
              <div className={styles.fullRow}>
                <Input label="Nome no Cartão" placeholder="Exatamente como impresso" fullWidth />
              </div>
              <Input label="Validade" placeholder="MM/AA" />
              <Input label="CVV" placeholder="123" />
              
              <div className={styles.fullRow}>
                <label className={styles.installmentsLabel}>Parcelamento</label>
                <select className={styles.installmentsSelect}>
                  <option>1x de R$ 165,80 sem juros</option>
                  <option>2x de R$ 82,90 sem juros</option>
                  <option>3x de R$ 55,26 sem juros</option>
                  <option>4x de R$ 41,45 sem juros</option>
                  <option>5x de R$ 33,16 sem juros</option>
                  <option>6x de R$ 27,63 sem juros</option>
                </select>
              </div>
            </div>
          </Card>
        </div>

        {/* Resumo do Pedido Lateral */}
        <div className={styles.orderSummary}>
          <Card padding="md">
            <h2>Resumo do Pedido</h2>
            
            <div className={styles.cartItemsList}>
              <div className={styles.summaryItem}>
                <div className={styles.summaryThumb}></div>
                <div className={styles.summaryItemInfo}>
                  <h4>Conjunto Sensuale Renda Preta</h4>
                  <p>M | Preto | Qtd: 1</p>
                  <span>R$ 149,90</span>
                </div>
              </div>
            </div>
            
            <div className={styles.summaryTotals}>
              <div className={styles.summaryLine}>
                <span>Subtotal (1 item)</span>
                <span>R$ 149,90</span>
              </div>
              <div className={styles.summaryLine}>
                <span>Frete</span>
                <span>R$ 15,90</span>
              </div>
              
              <div className={styles.totalLine}>
                <span>Total a Pagar</span>
                <span className={styles.totalPrice}>R$ 165,80</span>
              </div>
              <span className={styles.installments}>Em até 6x de R$ 27,63 sem juros</span>
            </div>
            
            <Button size="lg" fullWidth className={styles.finishBtn}>
              Finalizar Compra
            </Button>
            
            <div className={styles.securitySeal}>
              🔒 Compra 100% Segura e Discreta
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
