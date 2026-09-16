import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";

export default function EnderecosPage() {
  return (
    <>
      <div className={styles.contentHeader}>
        <div className={styles.titleArea}>
          <h2>Meus Endereços</h2>
          <p>Gerencie seus locais de entrega em Rio das Ostras</p>
        </div>
        <Button variant="primary">+ Adicionar novo endereço</Button>
      </div>

      <div className={styles.addressGrid}>
        {/* Endereço 1 */}
        <div className={styles.addressCard}>
          <div className={styles.cardHeader}>
            <div className={styles.addressTitleGroup}>
              <span className={styles.addressIcon}>🏠</span>
              <h3>Casa</h3>
            </div>
            <span className={styles.badge}>Padrão</span>
          </div>
          <div className={styles.addressDetails}>
            <p>Rua Dr. Ricardo Borriega, 371</p>
            <p>Atlântica, Rio das Ostras - RJ</p>
            <p>CEP 28890-000</p>
          </div>
          <div className={styles.cardActions}>
            <button className={styles.actionBtn}>Editar</button>
            <button className={styles.actionBtnDestructive}>Remover</button>
          </div>
        </div>

        {/* Endereço 2 */}
        <div className={styles.addressCard}>
          <div className={styles.cardHeader}>
            <div className={styles.addressTitleGroup}>
              <span className={styles.addressIcon}>🏢</span>
              <h3>Trabalho</h3>
            </div>
          </div>
          <div className={styles.addressDetails}>
            <p>Av. Atlântica, 500</p>
            <p>Centro, Rio das Ostras - RJ</p>
            <p>CEP 28895-000</p>
          </div>
          <div className={styles.cardActions}>
            <button className={styles.actionBtn}>Tornar padrão</button>
            <button className={styles.actionBtn}>Editar</button>
            <button className={styles.actionBtnDestructive}>Remover</button>
          </div>
        </div>
      </div>
    </>
  );
}
