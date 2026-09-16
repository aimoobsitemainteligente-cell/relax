import styles from "./page.module.css";
import prisma from "@/lib/prisma";

export default async function AdminDashboard() {
  const productCount = await prisma.product.count();
  const orderCount = await prisma.order.count();
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>Produtos Cadastrados</h3>
          <div className={styles.statValue}>{productCount}</div>
        </div>
        
        <div className={styles.statCard}>
          <h3>Pedidos Realizados</h3>
          <div className={styles.statValue}>{orderCount}</div>
        </div>
      </div>
    </div>
  );
}
