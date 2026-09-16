import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function CategoryPage() {
  return (
    <div className={styles.container}>
      {/* Categoria Banner */}
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1>Lingeries</h1>
          <p>Descubra nossa coleção exclusiva de lingeries para todos os momentos. Renda, conforto e muita sensualidade.</p>
        </div>
      </section>

      <div className={styles.mainLayout}>
        {/* Filtros Lateral (Sidebar) */}
        <aside className={styles.sidebar}>
          <div className={styles.filterGroup}>
            <h3>Tamanho</h3>
            <div className={styles.filterOptions}>
              <label><input type="checkbox" /> PP (36)</label>
              <label><input type="checkbox" /> P (38)</label>
              <label><input type="checkbox" /> M (40-42)</label>
              <label><input type="checkbox" /> G (44-46)</label>
              <label><input type="checkbox" /> GG (48-50)</label>
            </div>
          </div>

          <div className={styles.filterGroup}>
            <h3>Cor</h3>
            <div className={styles.colorGrid}>
              <div className={styles.colorItem} style={{backgroundColor: '#000'}} title="Preto"></div>
              <div className={styles.colorItem} style={{backgroundColor: '#d32f2f'}} title="Vermelho"></div>
              <div className={styles.colorItem} style={{backgroundColor: '#fff', border: '1px solid #ddd'}} title="Branco"></div>
              <div className={styles.colorItem} style={{backgroundColor: '#e91e63'}} title="Rosa"></div>
            </div>
          </div>

          <div className={styles.filterGroup}>
            <h3>Preço</h3>
            <div className={styles.filterOptions}>
              <label><input type="radio" name="price" /> Até R$ 99</label>
              <label><input type="radio" name="price" /> R$ 100 - R$ 199</label>
              <label><input type="radio" name="price" /> Acima de R$ 200</label>
            </div>
          </div>
        </aside>

        {/* Listagem de Produtos */}
        <div className={styles.content}>
          <div className={styles.toolbar}>
            <span>Mostrando 24 produtos</span>
            <div className={styles.sort}>
              <label>Ordenar por: </label>
              <select>
                <option>Mais vendidos</option>
                <option>Menor preço</option>
                <option>Maior preço</option>
                <option>Lançamentos</option>
              </select>
            </div>
          </div>

          <div className={styles.productGrid}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <Card key={item} padding="sm" className={styles.productCard}>
                <div className={styles.productImagePlaceholder}></div>
                <div className={styles.productInfo}>
                  <h4 className={styles.productName}>Conjunto Sensuale Renda Preta</h4>
                  <div className={styles.productPrice}>
                    <span className={styles.currentPrice}>R$ 149,90</span>
                  </div>
                  <Button fullWidth variant="outline">Ver Detalhes</Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className={styles.pagination}>
            <Button variant="ghost">Anterior</Button>
            <button className={styles.pageBtnActive}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <Button variant="ghost">Próxima</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
