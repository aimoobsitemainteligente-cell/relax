import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";

const ORDERS = [
  { id: "12847", date: "05/08/2026", status: "Saiu para entrega", statusType: "shipping", items: 2, total: "114,80" },
  { id: "12739", date: "18/07/2026", status: "Entregue", statusType: "delivered", items: 5, total: "254,90", plusItems: "+2" },
  { id: "12588", date: "30/06/2026", status: "Em trânsito", statusType: "shipping", items: 1, total: "14,25" },
  { id: "12114", date: "10/05/2026", status: "Cancelado", statusType: "canceled", items: 1, total: "56,05" }
];

export default function MeusPedidosPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Meus Pedidos</h1>
        <p className={styles.subtitle}>Acompanhe seu histórico de compras</p>
      </header>

      <div className={styles.orderList}>
        {ORDERS.map(order => (
          <div key={order.id} className={styles.orderCard}>
            <div className={styles.orderHeader}>
              <div className={styles.orderTitleBox}>
                <h3 className={styles.orderId}>Pedido #{order.id}</h3>
                <span className={styles.orderDate}>• {order.date}</span>
              </div>
              <span className={`${styles.statusBadge} ${styles[order.statusType]}`}>
                {order.status}
              </span>
            </div>

            <div className={styles.orderBody}>
              <div className={styles.orderImages}>
                {/* Simulated images for items */}
                <div className={styles.itemImage}></div>
                {order.items > 1 && <div className={styles.itemImage}></div>}
                {order.plusItems && (
                  <div className={styles.plusItemsBadge}>{order.plusItems}</div>
                )}
              </div>
              <div className={styles.orderSummary}>
                <span className={styles.itemCount}>{order.items} {order.items === 1 ? 'item' : 'itens'}</span>
                <span className={styles.orderTotal}>R$ {order.total}</span>
              </div>
            </div>

            <div className={styles.orderActions}>
              <Button className={styles.btnOutline}>Ver Detalhes</Button>
              <Button>Comprar Novamente</Button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <button className={styles.pageBtnActive}>1</button>
        <button className={styles.pageBtn}>2</button>
        <button className={styles.pageBtn}>3</button>
      </div>
    </div>
  );
}
