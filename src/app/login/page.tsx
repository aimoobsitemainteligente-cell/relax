import Link from "next/link";
import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      {/* Aviso Superior */}
      <div className={styles.announcementBar}>
        LOJA ONLINE EM RIO DAS OSTRAS-RJ • ENTREGA EM ATÉ 2H • ENVIAMOS PARA TODO O BRASIL!
      </div>

      <div className={styles.content}>
        {/* Coluna 1: Login */}
        <section className={styles.section}>
          <div className={styles.header}>
            <h1 className={styles.title}>Já tenho conta</h1>
            <p className={styles.subtitle}>Acesse sua conta para gerenciar seus pedidos e carrinho.</p>
          </div>

          <form className={styles.form}>
            <Input 
              label="E-mail ou CPF *" 
              placeholder="Seu e-mail cadastrado" 
              type="text" 
            />
            
            <div className={styles.passwordGroup}>
              <Input 
                label="Senha *" 
                placeholder="Sua senha de acesso" 
                type="password" 
              />
              <Link href="/recuperar-senha" className={styles.forgotPassword}>
                Esqueci minha senha
              </Link>
            </div>

            <Button type="button" size="lg" className={styles.submitBtn}>
              ENTRAR
            </Button>
          </form>

          <div className={styles.socialLogin}>
            <span className={styles.socialDivider}>ou acesse com</span>
            <div className={styles.socialButtons}>
              <Button variant="outline" className={styles.socialBtn}>Google</Button>
              <Button variant="outline" className={styles.socialBtn}>Facebook</Button>
            </div>
          </div>
        </section>

        {/* Divisor vertical no Desktop */}
        <div className={styles.divider}></div>

        {/* Coluna 2: Cadastro */}
        <section className={styles.section}>
          <div className={styles.header}>
            <h1 className={styles.title}>Criar conta</h1>
            <p className={styles.subtitle}>Ainda não é cadastrado? Leva menos de um minuto.</p>
          </div>

          <form className={styles.form}>
            <Input 
              label="Nome Completo *" 
              placeholder="Seu nome completo" 
              type="text" 
            />
            
            <Input 
              label="E-mail *" 
              placeholder="Seu e-mail principal" 
              type="email" 
            />

            <Input 
              label="Telefone / WhatsApp *" 
              placeholder="(22) 99999-9999" 
              type="tel" 
            />

            <div className={styles.passwordRow}>
              <Input 
                label="Criar Senha *" 
                placeholder="Mínimo 6 caracteres" 
                type="password" 
              />
              <Input 
                label="Confirmar Senha *" 
                placeholder="Repita a senha criada" 
                type="password" 
              />
            </div>

            <label className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.checkbox} />
              <span>Aceito os <Link href="/politicas/termos" className={styles.link}>termos de uso</Link> e <Link href="/politicas/privacidade" className={styles.link}>políticas de privacidade</Link>.</span>
            </label>

            <Button type="button" size="lg" className={styles.submitBtn}>
              CADASTRAR
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}
