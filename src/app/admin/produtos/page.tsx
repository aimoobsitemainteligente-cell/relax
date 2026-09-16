import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { deleteProduct } from "../actions";
import { Button } from "@/components/ui/Button";

export default async function AdminProdutos() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Produtos</h1>
        <Link href="/admin/produtos/novo">
          <Button>+ Novo Produto</Button>
        </Link>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Estoque</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan={5} className={styles.emptyState}>
                  Nenhum produto cadastrado.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>R$ {product.price.toFixed(2).replace('.', ',')}</td>
                  <td>{product.stock}</td>
                  <td>
                    <form action={async () => {
                      "use server";
                      await deleteProduct(product.id);
                    }}>
                      <button type="submit" className={styles.btnDelete}>
                        Excluir
                      </button>
                    </form>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
