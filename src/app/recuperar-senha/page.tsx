import Link from "next/link";
import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function RecuperarSenhaPage() {
  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/">Início</Link> &gt; <Link href="/minha-conta">Minha Conta</Link> &gt; <span>Recuperar Senha</span>
      </div>

      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.title}>Esqueci minha senha</h1>
            <p className={styles.subtitle}>
              Digite seu e-mail cadastrado e enviaremos um link para redefinir sua senha.
            </p>
          </div>

          <form className={styles.form}>
            <Input 
              label="E-mail institucional ou pessoal" 
              placeholder="exemplo@email.com" 
              type="email" 
            />

            <Button type="button" size="lg" className={styles.submitBtn}>
              ENVIAR LINK
            </Button>
          </form>

          <div className={styles.footer}>
            <span className={styles.helpText}>Lembrou a senha?</span>
            <Link href="/login" className={styles.link}>
              Voltar para o login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
