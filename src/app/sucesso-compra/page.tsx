import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";

export default function SucessoCompraPage() {
  return (
    <div className={styles.container}>
      <div className={styles.successBox}>
        <div className={styles.iconCircle}>
          ✓
        </div>
        <h1 className={styles.title}>Pedido Confirmado!</h1>
        <p className={styles.subtitle}>Obrigada pela sua compra, Kelly Cavalcante!</p>
        
        <div className={styles.orderNumberBox}>
          <span>Pedido #12847</span>
        </div>

        <div className={styles.detailsGrid}>
          {/* Order Items */}
          <div className={styles.card}>
            <h3>Itens do Pedido</h3>
            <div className={styles.itemList}>
              <div className={styles.item}>
                <div className={styles.itemImage}></div>
                <div className={styles.itemInfo}>
                  <h4>Babasoul Hidratante Corporal Beijável - Frutas Vermelhas</h4>
                  <span className={styles.itemQty}>Quantidade: 1</span>
                  <span className={styles.itemPrice}>R$ 44,99</span>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.itemImage}></div>
                <div className={styles.itemInfo}>
                  <h4>Conjunto Rendado Intense Pink Luxo</h4>
                  <span className={styles.itemQty}>Quantidade: 2</span>
                  <span className={styles.itemPrice}>R$ 167,80</span>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.itemImage}></div>
                <div className={styles.itemInfo}>
                  <h4>Bullet Multivelocidades Silk Touch</h4>
                  <span className={styles.itemQty}>Quantidade: 1</span>
                  <span className={styles.itemPrice}>R$ 36,60</span>
                </div>
              </div>
            </div>
            <div className={styles.totalRow}>
              <span>Total Pago</span>
              <strong>R$ 249,39</strong>
            </div>
          </div>

          {/* Delivery Info */}
          <div className={styles.card}>
            <h3>Informações de Entrega</h3>
            
            <div className={styles.infoBlock}>
              <span className={styles.badge}>ENTREGA FULL 2H</span>
              <div className={styles.infoRow}>
                <span className={styles.label}>Estimativa</span>
                <strong>Terça-feira, 09:00 às 22:00</strong>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoRow}>
                <span className={styles.label}>Endereço</span>
                <p>Rua Dr. Ricardo Borriega, 371 - Atlântica<br/>Rio das Ostras - RJ</p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoRow}>
                <span className={styles.label}>Método Utilizado</span>
                <p>Cartão de Crédito **** 4532 - 3x R$ 83,13</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <Button size="lg" className={styles.btnPrimary}>ACOMPANHAR PEDIDO</Button>
          <Button size="lg" className={styles.btnOutline}>CONTINUAR COMPRANDO</Button>
        </div>

        <p className={styles.emailNote}>Enviamos todos os detalhes da compra para debbysan@hotmail.com</p>
      </div>
    </div>
  );
}
