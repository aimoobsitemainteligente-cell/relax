import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function MinhaContaPage() {
  return (
    <>
      <div className={styles.contentHeader}>
        <h2>Meus Pedidos</h2>
        <p>Acompanhe o status das suas compras abaixo.</p>
      </div>

      <div className={styles.ordersList}>
        {/* Pedido 1 */}
        <Card padding="md" className={styles.orderCard}>
          <div className={styles.orderHeader}>
            <div>
              <span className={styles.orderNumber}>Pedido #12345</span>
              <span className={styles.orderDate}>Realizado em: 15/09/2026</span>
            </div>
            <div className={styles.orderStatusContainer}>
              <span className={`${styles.statusBadge} ${styles.statusTransit}`}>
                🚚 Em trânsito
              </span>
            </div>
          </div>
          
          <div className={styles.orderBody}>
            <div className={styles.orderItems}>
              <div className={styles.orderItem}>
                <div className={styles.itemThumb}></div>
                <div className={styles.itemInfo}>
                  <h4>Conjunto Sensuale Renda Preta</h4>
                  <p>Qtd: 1</p>
                </div>
              </div>
            </div>
            
            <div className={styles.orderActions}>
              <Button variant="outline" size="sm" fullWidth>Rastrear Pedido</Button>
              <Button variant="ghost" size="sm" fullWidth>Ver Detalhes</Button>
            </div>
          </div>
        </Card>

        {/* Pedido 2 */}
        <Card padding="md" className={styles.orderCard}>
          <div className={styles.orderHeader}>
            <div>
              <span className={styles.orderNumber}>Pedido #12300</span>
              <span className={styles.orderDate}>Realizado em: 02/08/2026</span>
            </div>
            <div className={styles.orderStatusContainer}>
              <span className={`${styles.statusBadge} ${styles.statusDelivered}`}>
                ✅ Entregue
              </span>
            </div>
          </div>
          
          <div className={styles.orderBody}>
            <div className={styles.orderItems}>
              <div className={styles.orderItem}>
                <div className={styles.itemThumb}></div>
                <div className={styles.itemInfo}>
                  <h4>Óleo de Massagem Vanilla</h4>
                  <p>Qtd: 2</p>
                </div>
              </div>
            </div>
            
            <div className={styles.orderActions}>
              <Button variant="secondary" size="sm" fullWidth>Comprar Novamente</Button>
              <Button variant="ghost" size="sm" fullWidth>Ver Detalhes</Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
