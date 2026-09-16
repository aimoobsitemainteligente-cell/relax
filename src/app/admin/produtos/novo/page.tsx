import styles from "./page.module.css";
import { createProduct } from "../../actions";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NovoProduto() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Novo Produto</h1>
        <Link href="/admin/produtos" className={styles.linkBack}>
          Voltar
        </Link>
      </div>

      <div className={styles.formCard}>
        <form action={createProduct} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Nome do Produto</label>
            <input type="text" name="name" required placeholder="Ex: Vibrador Rabbit Rosa" />
          </div>

          <div className={styles.inputGroup}>
            <label>Categoria</label>
            <select name="category" required>
              <option value="Sex Shop">Sex Shop</option>
              <option value="Lingerie">Lingerie</option>
              <option value="Cosméticos">Cosméticos</option>
              <option value="Acessórios">Acessórios</option>
            </select>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Preço Atual (R$)</label>
              <input type="number" step="0.01" name="price" required placeholder="0.00" />
            </div>
            
            <div className={styles.inputGroup}>
              <label>Preço Antigo (R$) - Opcional</label>
              <input type="number" step="0.01" name="oldPrice" placeholder="0.00" />
            </div>
            
            <div className={styles.inputGroup}>
              <label>Estoque Inicial</label>
              <input type="number" name="stock" required defaultValue="10" />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Descrição</label>
            <textarea name="description" rows={5} placeholder="Detalhes do produto..."></textarea>
          </div>

          <div className={styles.actions}>
            <Button type="submit">Salvar Produto</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
