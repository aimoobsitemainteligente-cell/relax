import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";

// Dados mockados baseados no Figma
const favoritos = [
  { id: 1, name: "Conjunto Rendado Intense Pink", price: "79,90" },
  { id: 2, name: "Bullet Multivelocidades Silk Touch", price: "34,90" },
  { id: 3, name: "Babasoul Hidratante Beijável 150g", price: "42,75" },
  { id: 4, name: "Lingerie Rendada Sem Bojo Elegance", price: "56,05" },
  { id: 5, name: "Egg Thunder Stronger Estimulador", price: "38,00" },
  { id: 6, name: "Plug Anal em Metal com Cristal P", price: "48,00" },
];

export default function FavoritosPage() {
  return (
    <>
      <div className={styles.contentHeader}>
        <div className={styles.titleArea}>
          <h2>Meus Favoritos</h2>
          <span className={styles.itemCount}>({favoritos.length} itens)</span>
        </div>
      </div>

      <div className={styles.productsGrid}>
        {favoritos.map((produto) => (
          <div key={produto.id} className={styles.productCard}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.badge}>Full 2h</div>
              <button className={styles.removeBtn}>✕</button>
            </div>
            
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{produto.name}</h3>
              <div className={styles.priceContainer}>
                <span className={styles.price}>R$ {produto.price}</span>
                <span className={styles.pixInfo}>NO PIX</span>
              </div>
              <Button fullWidth className={styles.buyBtn}>COMPRAR</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
