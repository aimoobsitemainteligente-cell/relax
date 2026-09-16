import styles from "./not-found.module.css";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorLabel}>PÁGINA INDISPONÍVEL</div>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Ops! Página não encontrada</h2>
        <p className={styles.description}>
          Parece que esta página saiu do catálogo. Mas não se preocupe, temos muitas outras opções esperando por você!
        </p>

        <Link href="/">
          <Button size="lg" className={styles.btnHome}>VOLTAR À PÁGINA INICIAL</Button>
        </Link>

        <div className={styles.exploreBox}>
          <h3>Explorar categorias</h3>
          <p>Ou navegue pelos mais vendidos:</p>
          <div className={styles.tags}>
            <Link href="/busca" className={styles.tag}>Sex Shop</Link>
            <Link href="/busca" className={styles.tag}>Lingerie</Link>
            <Link href="/busca" className={styles.tag}>Vibradores</Link>
            <Link href="/busca" className={styles.tag}>Conjuntos</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
