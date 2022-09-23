import { useForm } from 'react-hook-form';
import { postData } from './api/rooms';

const baseURL = 'https://backend-tcc.onrender.com';

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    postData(`${baseURL}/new/sala`, {
      numero: data.Numero,
      especialidade: data.Especialidade,
      responsavel: data.Responsavel,
    }).then((data) => {
      console.table(data);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Numero" {...register('Numero', {})} />
        <input
          type="text"
          placeholder="Especialidade"
          {...register('Especialidade', {})}
        />
        <input
          type="text"
          placeholder="Responsável"
          {...register('Responsavel', {})}
        />
        <input type="submit" />
      </form>
    </>
  );
}
