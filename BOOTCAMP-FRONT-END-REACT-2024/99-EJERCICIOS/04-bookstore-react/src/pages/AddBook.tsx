import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

import { InputRHF, Typography } from '../components';
import { BookFormData, globalBookSchema } from '../config/schemas';
import Button from '../components/Button';
import { toast } from 'react-toastify';
import axiosAPI from '../config/axios';
import { AxiosError } from 'axios';
import Spinner from '../components/Spinner';

function AddBook () {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm<BookFormData>({
    mode: 'onChange',
    resolver: zodResolver(globalBookSchema),
    defaultValues: {
      price: 0
    }
  });

  // async function onSubmit (data: BookFormData) {
  //   try {
  //     const resp = await fetch('https://bookstore-api-a6n5.onrender.com/books', {
  //       method: 'POST',
  //       headers: {
  //         'content-type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     });
  //     const json = await resp.json();
  //     if (resp.status === 201) {
  //       toast.success(`Se ha añadido el libro con el nuevo id ${json.id}`);
  //       navigate('/books');
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       toast.error(error.message);
  //     }
  //   }
  // }

  async function onSubmitAxios (data: BookFormData) {
    try {
      const resp = await axiosAPI.post('/books', data);

      toast.success(`Se ha añadido el libro con el nuevo id ${resp.data.id}`);
      navigate('/books');
    } catch (error) {
      if (error instanceof AxiosError || error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  return (
    <>
      <Typography as="h1">Añadir Libro</Typography>

      <form onSubmit={handleSubmit(onSubmitAxios)} className='bg-white p-8 rounded my-12 flex flex-col gap-8 max-w-xl' noValidate>

        <InputRHF
          type="text"
          label="Título:"
          labelClass='text-violet-500'
          errorClass='underline'
          error={errors.title?.message}
          {...register('title')}
        />
        <InputRHF
          type="text"
          label="Autor:"
          labelClass='text-violet-500'
          errorClass='underline'
          error={errors.author?.message}
          {...register('author')}
        />
        <InputRHF
          type="text"
          label="Tipo de libro:"
          labelClass='text-violet-500'
          errorClass='underline'
          error={errors.type?.message}
          {...register('type')}
        />
        <InputRHF
          type="text"
          label="Foto:"
          labelClass='text-violet-500'
          errorClass='underline'
          error={errors.photo?.message}
          {...register('photo')}
        />
        <InputRHF
          type="number"
          label="Precio:"
          labelClass='text-violet-500'
          errorClass='underline'
          error={errors.price?.message}
          {...register('price')}
        />

        <Button className='flex gap-8 justify-center items-center' disabled={!isValid || isSubmitting}>Añadir libro {isSubmitting && <Spinner className='w-6 text-black'/>}</Button>
        </form>
    </>
  );
}

export default AddBook;
