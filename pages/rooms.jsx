import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Rooms() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Salas</h1>

      <p className={styles.description}>Ações relacionadas as salas</p>

      <div className={styles.grid}>
        <Link href="/rooms/getAllSalas">
          <a className={styles.card}>
            <h2>Salas Abertas &rarr;</h2>
            <p>Lista de salas abertas</p>
          </a>
        </Link>

        <Link href="/rooms/createRoom">
          <a className={styles.card}>
            <h2>Criar Sala</h2>
            <p>Crie uma nova sala de qualquer tipo</p>
          </a>
        </Link>
      </div>
    </main>
  );
}
