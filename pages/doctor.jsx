import styles from '../styles/Home.module.scss';
import { postData, getData, patchData, deleteData } from './api/rooms';

const baseURL = 'https://backend-tcc.onrender.com';
const num = '01';

// postData(`${baseURL}/new/sala`, {
//   numero: '02',
//   especialidade: 'triagem',
//   responsavel: 'BolsoLula',
// }).then((data) => {
//   console.table(data);
// });

// getData(`${baseURL}/salas`).then((data) => console.table(data));
//getData(`${baseURL}/sala/${num}`).then((data) => console.table(data));

// patchData(`${baseURL}/sala/${num}/update`, {
//   especialidade: 'triagem',
//   responsavel: 'Eyeyeymael, o democrata cristão',
// }).then((data) => {
//   console.table(data);
// });

// deleteData(`${baseURL}/sala/${num}`);

export default function Doctor() {
  return <h1>Médico</h1>;
}
