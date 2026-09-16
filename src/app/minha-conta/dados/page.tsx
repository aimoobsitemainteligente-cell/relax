import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function DadosPage() {
  return (
    <>
      <div className={styles.contentHeader}>
        <h2>Meus Dados</h2>
      </div>

      <div className={styles.formContainer}>
        {/* Foto de Perfil */}
        <div className={styles.photoSection}>
          <div className={styles.avatar}>KC</div>
          <div className={styles.photoInfo}>
            <button className={styles.changePhotoBtn}>Alterar foto</button>
            <p className={styles.photoHint}>JPG ou PNG. Máximo 2MB.</p>
          </div>
        </div>

        {/* Dados Pessoais */}
        <section className={styles.formSection}>
          <h3>Dados Pessoais</h3>
          <div className={styles.grid2}>
            <Input label="Nome Completo" defaultValue="Kelly Cavalcante" />
            <Input label="CPF" defaultValue="163.100.497-20" disabled />
          </div>
          <div className={styles.grid2}>
            <Input label="Data de Nascimento" defaultValue="28/05/1996" type="date" />
            <div className={styles.inputGroup}>
              <label>Gênero</label>
              <select className={styles.select} defaultValue="Feminino">
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Outro">Outro</option>
                <option value="Prefiro não informar">Prefiro não informar</option>
              </select>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className={styles.formSection}>
          <h3>Contato</h3>
          <div className={styles.grid2}>
            <Input label="E-mail" defaultValue="debbysan@hotmail.com" type="email" />
            <Input label="Celular / WhatsApp" defaultValue="(22) 99908-0917" type="tel" />
          </div>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} defaultChecked />
            <span>Receber novidades por WhatsApp</span>
          </label>
        </section>

        {/* Alterar Senha */}
        <section className={styles.formSection}>
          <h3>Alterar Senha</h3>
          <div className={styles.grid2}>
            <Input label="Senha Atual" type="password" placeholder="••••••••" />
          </div>
          <div className={styles.grid2}>
            <Input label="Nova Senha" type="password" placeholder="••••••••" />
            <Input label="Confirmar Nova Senha" type="password" placeholder="••••••••" />
          </div>
        </section>

        <div className={styles.formActions}>
          <Button size="lg">SALVAR ALTERAÇÕES</Button>
        </div>
      </div>
    </>
  );
}
