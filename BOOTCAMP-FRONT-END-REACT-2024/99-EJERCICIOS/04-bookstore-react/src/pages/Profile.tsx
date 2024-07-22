import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputRHF, Typography } from '../components';
import Button from '../components/Button';
import { profileSchema } from '../config/schemas';
import useUserContext from '../hooks/useUserContext';

type FormData = {
  name: string;
  last_name: string;
  email: string;
  photo: string;
};

function Profile () {
  const { user } = useUserContext();

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    defaultValues: user || {},
    mode: 'onChange',
    resolver: zodResolver(profileSchema)
  });

  function onSubmit (data: FormData) {
    console.log(data);
  }

  return (
    <>
      <Typography as="h1">Profile</Typography>

      <form onSubmit={handleSubmit(onSubmit)} className='bg-white p-8 rounded my-12 flex flex-col gap-8 max-w-xl' noValidate>

        <InputRHF
          type="text"
          label="Nombre:"
          labelClass='text-violet-500'
          errorClass='underline'
          error={errors.name?.message}
          {...register('name')}
        />

        <InputRHF
          type="text"
          label="Apellidos:"
          labelClass='text-violet-500'
          errorClass='underline'
          error={errors.last_name?.message}
          {...register('last_name')}
        />

        <InputRHF
          type="email"
          label="Email:"
          labelClass='text-violet-500'
          errorClass='underline'
          error={errors.email?.message}
          {...register('email')}
        />

        <InputRHF
          type="url"
          label="Foto:"
          labelClass='text-violet-500'
          errorClass='underline'
          error={errors.photo?.message}
          {...register('photo')}
        />

        <Button disabled={!isValid}>Actualizar</Button>
      </form>

    </>
  );
}

export default Profile;
