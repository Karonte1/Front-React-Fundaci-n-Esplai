import { useForm } from 'react-hook-form';
import { InputRHF, Typography } from '../components';
import { BookFormData, globalBookSchema } from '../config/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../components/Button';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axiosAPI from '../config/axios';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

function EditBook () {
  const { state: book } = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!state) {
  //     axiosAPI.get(`/books/${params.bookId}`)
  //       .then(response => setBook(response.data));
  //   }
  // }, []);

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<BookFormData>({
    mode: 'onChange',
    resolver: zodResolver(globalBookSchema),
    defaultValues: book || (async () => {
      const response = await axiosAPI.get(`/books/${params.bookId}`);
      return response.data;
    })
  });

  async function onSubmit (data: BookFormData) {
    try {
      const response = await axiosAPI.patch(`/books/${params.bookId}`, data);
      console.log(response);
      toast.success(`El libro con el id ${params.bookId} se ha actualizado`);
      navigate('/books');
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    }
  }

  return (
    <>
      <Typography as="h1">Editar Libro</Typography>

      <form onSubmit={handleSubmit(onSubmit)} className='bg-white p-8 rounded my-12 flex flex-col gap-8 max-w-xl' noValidate>

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

        <Button disabled={!isValid}>Actualizar libro</Button>
        </form>
    </>
  );
}

export default EditBook;
