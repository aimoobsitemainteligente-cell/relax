import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Blog Relax</h1>
        <p className={styles.subtitle}>Dicas de moda íntima, cuidados com tecidos e tendências para se sentir incrível</p>
      </header>

      <div className={styles.layout}>
        <main className={styles.mainContent}>
          {/* Featured Post */}
          <article className={styles.featuredPost}>
            <div className={styles.featuredImage}></div>
            <div className={styles.featuredInfo}>
              <span className={styles.category}>TENDÊNCIAS</span>
              <h2>Como Escolher o Sutiã Perfeito para Cada Tipo de Corpo</h2>
              <div className={styles.meta}>
                <span>15 Jul 2026</span> • <span>5 min leitura</span>
              </div>
              <p className={styles.excerpt}>
                Encontrar o sutiã ideal vai muito além de escolher um modelo bonito. Trata-se de suporte, proporções corretas e, acima de tudo, do seu conforto diário. Descubra neste guia completo como identificar o caimento perfeito para valorizar suas curvas naturais e acabar com as marcas indesejadas na pele.
              </p>
              <Button>CONTINUAR LENDO</Button>
            </div>
          </article>

          {/* Recent Posts Grid */}
          <div className={styles.postsGrid}>
            <article className={styles.postCard}>
              <div className={styles.postImage}></div>
              <div className={styles.postContent}>
                <span className={styles.category}>CUIDADOS</span>
                <h3>Como Cuidar e Armazenar suas Peças de Renda por Mais Tempo</h3>
                <div className={styles.meta}>
                  <span>12 Jul 2026</span> • <span>4 min leitura</span>
                </div>
                <Link href="#" className={styles.readMore}>LER MAIS</Link>
              </div>
            </article>

            <article className={styles.postCard}>
              <div className={styles.postImage}></div>
              <div className={styles.postContent}>
                <span className={styles.category}>LOOKS</span>
                <h3>O Guia Definitivo do Body de Renda no Look Casual ao Trabalho</h3>
                <div className={styles.meta}>
                  <span>08 Jul 2026</span> • <span>6 min leitura</span>
                </div>
                <Link href="#" className={styles.readMore}>LER MAIS</Link>
              </div>
            </article>

            <article className={styles.postCard}>
              <div className={styles.postImage}></div>
              <div className={styles.postContent}>
                <span className={styles.category}>TENDÊNCIAS</span>
                <h3>Cores da Estação: Quais Tons Vão Dominar a Moda Íntima em 2026</h3>
                <div className={styles.meta}>
                  <span>29 Jun 2026</span> • <span>3 min leitura</span>
                </div>
                <Link href="#" className={styles.readMore}>LER MAIS</Link>
              </div>
            </article>

            <article className={styles.postCard}>
              <div className={styles.postImage}></div>
              <div className={styles.postContent}>
                <span className={styles.category}>GUIA DE TAMANHOS</span>
                <h3>Como Saber se Você Está Usando o Tamanho Correto de Sutiã</h3>
                <div className={styles.meta}>
                  <span>22 Jun 2026</span> • <span>8 min leitura</span>
                </div>
                <Link href="#" className={styles.readMore}>LER MAIS</Link>
              </div>
            </article>

            <article className={styles.postCard}>
              <div className={styles.postImage}></div>
              <div className={styles.postContent}>
                <span className={styles.category}>MODA</span>
                <h3>Alças Descobertas: Como Fazer dos Detalhes o Ponto Alto do Look</h3>
                <div className={styles.meta}>
                  <span>15 Jun 2026</span> • <span>4 min leitura</span>
                </div>
                <Link href="#" className={styles.readMore}>LER MAIS</Link>
              </div>
            </article>

            <article className={styles.postCard}>
              <div className={styles.postImage}></div>
              <div className={styles.postContent}>
                <span className={styles.category}>SUSTENTABILIDADE</span>
                <h3>Tecidos Biodegradáveis e o Futuro Confortável da Moda Íntima</h3>
                <div className={styles.meta}>
                  <span>05 Jun 2026</span> • <span>5 min leitura</span>
                </div>
                <Link href="#" className={styles.readMore}>LER MAIS</Link>
              </div>
            </article>
          </div>

          <div className={styles.pagination}>
            <button className={styles.pageBtnActive}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <span className={styles.pageEllipsis}>...</span>
            <button className={styles.pageBtn}>12</button>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarWidget}>
            <h3>Buscar no blog...</h3>
            <div className={styles.searchBox}>
              <input type="text" placeholder="Pesquisar artigos" />
              <button>🔍</button>
            </div>
          </div>

          <div className={styles.sidebarWidget}>
            <h3>Categorias</h3>
            <ul className={styles.categoryList}>
              <li><Link href="#">Cuidados com Tecidos</Link> <span>(14)</span></li>
              <li><Link href="#">Guia de Tamanhos</Link> <span>(8)</span></li>
              <li><Link href="#">Looks & Estilo</Link> <span>(22)</span></li>
              <li><Link href="#">Tendências de Moda</Link> <span>(19)</span></li>
              <li><Link href="#">Sustentabilidade</Link> <span>(5)</span></li>
            </ul>
          </div>

          <div className={styles.sidebarWidget}>
            <h3>Mais Lidos</h3>
            <ul className={styles.mostReadList}>
              <li>
                <span className={styles.rank}>01</span>
                <Link href="#">Rendas Delicadas: Como Lavar na Máquina sem Danificar</Link>
              </li>
              <li>
                <span className={styles.rank}>02</span>
                <Link href="#">Os 5 Modelos de Calcinha que Toda Mulher Deve Ter</Link>
              </li>
              <li>
                <span className={styles.rank}>03</span>
                <Link href="#">Lingerie à Mostra: Aprenda a Usar a Tendência no Dia a Dia</Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <section className={styles.newsletter}>
        <div className={styles.newsletterBox}>
          <h2>Newsletter Relax</h2>
          <p>Receba as novidades, dicas exclusivas e descontos especiais na sua caixa de entrada.</p>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="Seu melhor e-mail..." />
            <Button>INSCREVER-SE</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
