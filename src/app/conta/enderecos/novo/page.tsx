import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";

export default function EnderecoNovoPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Adicionar Novo Endereço</h1>
        <p className={styles.subtitle}>Cadastre um novo endereço de entrega em Rio das Ostras-RJ</p>
      </header>

      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label>CEP</label>
          <div className={styles.cepBox}>
            <input type="text" defaultValue="28890-000" />
            <button type="button" className={styles.btnBuscar}>Buscar</button>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup} style={{ flex: 2 }}>
            <label>Rua / Logradouro</label>
            <input type="text" defaultValue="Rua Dr. Ricardo Bartelega" />
          </div>
          <div className={styles.inputGroup} style={{ flex: 1 }}>
            <label>Número</label>
            <input type="text" defaultValue="371" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Complemento</label>
          <input type="text" defaultValue="Apto 202, Bloco B" />
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Bairro</label>
            <input type="text" defaultValue="Atlântica" />
          </div>
          <div className={styles.inputGroup}>
            <label>Cidade</label>
            <input type="text" defaultValue="Rio das Ostras" />
          </div>
          <div className={styles.inputGroup}>
            <label>Estado</label>
            <input type="text" defaultValue="Rio de Janeiro (RJ)" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Apelido do endereço</label>
          <p className={styles.hint}>Dê um nome para este endereço (ex: Casa da Mãe)</p>
          <div className={styles.tagsBox}>
            <button type="button" className={styles.tagActive}>Casa</button>
            <button type="button" className={styles.tag}>Trabalho</button>
            <button type="button" className={styles.tag}>Outro</button>
          </div>
        </div>

        <div className={styles.checkboxGroup}>
          <input type="checkbox" id="defaultAddress" defaultChecked />
          <label htmlFor="defaultAddress">Definir como endereço padrão</label>
        </div>

        <div className={styles.actions}>
          <Button type="button" className={styles.btnCancel}>CANCELAR</Button>
          <Button type="submit">SALVAR ENDEREÇO</Button>
        </div>
      </form>
    </div>
  );
}
