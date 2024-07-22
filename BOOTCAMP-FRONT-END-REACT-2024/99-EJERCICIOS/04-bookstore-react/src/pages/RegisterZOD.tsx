import { InputRHF, Typography } from '../components';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormData, registerSchema } from '../config/schemas';

function Register () {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<RegisterFormData>({
    mode: 'onChange',
    resolver: zodResolver(registerSchema)
  });
  // const { errors } = formState;

  function onSubmit (data: RegisterFormData) {
    console.log(data);
  }

  return (
    <>
      <Typography as="h1">Regístrate</Typography>
      <form onSubmit={handleSubmit(onSubmit)} className='bg-white p-8 rounded my-12 flex flex-col gap-8 max-w-xl'>
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
          error={errors.surname?.message}
          {...register('surname')}
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

        <InputRHF
          type="text"
          label="Contraseña:"
          labelClass='text-violet-500'
          errorClass='underline'
          error={errors.password?.message}
          {...register('password')}
        />

        <InputRHF
          type="text"
          label="Repetir contraseña:"
          labelClass='text-violet-500'
          errorClass='underline'
          error={errors.repeatPassword?.message}
          {...register('repeatPassword')}
        />

        <Button disabled={!isValid}>Regístrate</Button>
      </form>
    </>
  );
}

export default Register;
