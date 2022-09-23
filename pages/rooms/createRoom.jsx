import { useForm } from 'react-hook-form';
import { postData } from '../api/rooms';

const baseURL = 'https://backend-tcc.onrender.com';

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    postData(`${baseURL}/new/sala`, {
      numero: data.numero,
      especialidade: data.especialidade,
      responsavel: data.responsavel,
    }).then((data) => {
      console.table(data);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="number" placeholder="Numero" {...register('numero', {})} />
        <input
          type="text"
          placeholder="Especialidade"
          {...register('especialidade', {})}
        />
        <input
          type="text"
          placeholder="Responsável"
          {...register('responsavel', {})}
        />
        <input type="submit" />
      </form>
    </>
  );
}
