import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function CartPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Meu Carrinho</h1>
      
      <div className={styles.cartLayout}>
        <div className={styles.cartItems}>
          {/* Item do Carrinho */}
          <div className={styles.cartItem}>
            <div className={styles.itemImagePlaceholder}></div>
            <div className={styles.itemDetails}>
              <div className={styles.itemHeader}>
                <h3>Conjunto Sensuale Renda Preta</h3>
                <button className={styles.removeBtn}>🗑️ Remover</button>
              </div>
              <p className={styles.itemAttr}>Tamanho: M | Cor: Preto</p>
              
              <div className={styles.itemActions}>
                <div className={styles.quantitySelector}>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <div className={styles.priceInfo}>
                  <span className={styles.oldPrice}>R$ 189,90</span>
                  <span className={styles.currentPrice}>R$ 149,90</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.shippingCalc}>
            <label>Calcular Frete</label>
            <div className={styles.shippingInputGroup}>
              <input type="text" placeholder="CEP" />
              <Button variant="outline">Ok</Button>
            </div>
          </div>
        </div>

        <div className={styles.orderSummary}>
          <Card padding="md">
            <h2>Resumo do Pedido</h2>
            
            <div className={styles.summaryLine}>
              <span>Subtotal (1 item)</span>
              <span>R$ 149,90</span>
            </div>
            <div className={styles.summaryLine}>
              <span>Descontos</span>
              <span className={styles.discount}>- R$ 40,00</span>
            </div>
            <div className={styles.summaryLine}>
              <span>Frete</span>
              <span>A calcular</span>
            </div>
            
            <div className={styles.couponGroup}>
              <input type="text" placeholder="Cupom de Desconto" />
              <Button variant="secondary">Aplicar</Button>
            </div>
            
            <div className={styles.totalLine}>
              <span>Total</span>
              <span className={styles.totalPrice}>R$ 149,90</span>
            </div>
            <span className={styles.installments}>Em até 6x de R$ 24,98 sem juros</span>
            
            <Link href="/checkout">
              <Button size="lg" fullWidth className={styles.checkoutBtn}>
                Ir para o Pagamento
              </Button>
            </Link>
            
            <Link href="/" className={styles.continueShopping}>
              Continuar Comprando
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
