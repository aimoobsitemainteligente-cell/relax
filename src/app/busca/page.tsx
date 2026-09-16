import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { SearchControls } from "./SearchControls";
import prisma from "@/lib/prisma";

export default async function BuscaPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.q || "";
  
  // Realiza a busca no banco de dados (ignorando case)
  const products = await prisma.product.findMany({
    where: query ? {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
        { category: { contains: query, mode: "insensitive" } }
      ]
    } : {},
    orderBy: { createdAt: "desc" }
  });

  const totalResults = products.length;

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <span>Busca</span> &gt; <span>Resultados para "{query}"</span>
      </div>

      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h1 className={styles.title}>Resultados para "{query}"</h1>
          <span className={styles.count}>({totalResults} produtos encontrados)</span>
        </div>
        
        <SearchControls />
      </div>

      <div className={styles.productGrid}>
        {products.length === 0 ? (
          <div style={{ gridColumn: "1 / -1", padding: "40px", textAlign: "center", color: "#666" }}>
            Nenhum produto encontrado para "{query}".
          </div>
        ) : (
          products.map((product) => (
            <ProductCard 
              key={product.id}
              name={product.name}
              price={product.price.toFixed(2).replace('.', ',')}
              oldPrice={product.oldPrice ? product.oldPrice.toFixed(2).replace('.', ',') : undefined}
              badge={product.badge || undefined}
            />
          ))
        )}
      </div>

      <div className={styles.supportBanner}>
        <div className={styles.supportContent}>
          <h2>Não encontrou o que procura?</h2>
          <p>Nossa equipe está pronta para te atender e te dar dicas personalizadas. Temos muito mais novidades no nosso catálogo privado do WhatsApp!</p>
          <Button size="lg" className={styles.whatsappBtn}>Falar no WhatsApp</Button>
        </div>
      </div>
    </div>
  );
}
