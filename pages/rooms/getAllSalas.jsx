import { getData } from '../api/rooms';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.scss';
import * as tableStyles from './table.module.scss';

const baseURL = 'https://backend-tcc.onrender.com';

export default function GetAllSalas() {
  const [salas, setSalas] = useState([{}]);

  useEffect(() => {
    getData(`${baseURL}/salas`).then((data) => setSalas(data));
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Salas</h1>
      <p className={styles.description}> Todas as salas abertas no momento </p>
      <div className={styles.grid}>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>Número</th>
              <th>Especialidade</th>
              <th>Responsável</th>
            </tr>
          </thead>
          <tbody>
            {salas.map((sala) => {
              return (
                <tr key={sala.id}>
                  {/* <td>{sala.id}</td> */}
                  <td>{sala.numero}</td>
                  <td>{sala.especialidade}</td>
                  <td>{sala.responsavel}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
