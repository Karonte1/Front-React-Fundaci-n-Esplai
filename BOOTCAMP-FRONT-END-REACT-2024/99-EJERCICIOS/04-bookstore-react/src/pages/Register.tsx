import { Typography } from '../components';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';

type FormData = {
  name: string;
  surname: string;
  email: string;
  photo: string;
  password: string;
  repeatPassword: string;
}

function Register () {
  const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm<FormData>({
    mode: 'onChange'
  });
  // const { errors } = formState;

  function onSubmit (data: FormData) {
    console.log(data);
  }

  return (
    <>
      <Typography as="h1">Regístrate</Typography>
      <form onSubmit={handleSubmit(onSubmit)} className='bg-white p-8 rounded my-12 flex flex-col gap-8 max-w-xl'>
        <label className='flex justify-between items-center'>
          Nombre:
          <div className='relative'>
            <input
              type="text"
              className='peer outline-none ring-2 ring-transparent focus:ring-violet-300  border-2 rounded px-4 py-2'
              {...register('name', {
                required: 'Campo obligatorio',
                minLength: { value: 4, message: 'Mínimo 4 caracteres' },
                maxLength: { value: 12, message: 'Máximo 12 caracteres' }
              })}
            />
            {errors.name && <span className='text-red-400 absolute top-full left-0 text-xs'>{errors.name.message}</span>}
          </div>
        </label>
        <label className='flex justify-between items-center'>
          Apellidos:
          <div className='relative'>
            <input
              type="text"
              className='peer outline-none ring-2 ring-transparent focus:ring-violet-300  border-2 rounded px-4 py-2'
              {...register('surname', {
                required: 'Campo obligatorio',
                minLength: { value: 4, message: 'Mínimo 4 caracteres' },
                maxLength: { value: 20, message: 'Máximo 20 caracteres' }
              })}
            />
            {errors.surname && <span className='text-red-400 absolute top-full left-0 text-xs'>{errors.surname.message}</span>}
          </div>
        </label>

        <label className='flex justify-between items-center'>
          Email:
          <div className='relative'>
            <input
              type="email"
              className='peer outline-none ring-2 ring-transparent focus:ring-violet-300 border-2 rounded px-4 py-2'
              {...register('email', {
                required: 'Campo obligatorio',
                pattern: {
                  value: /^.+@[^.].*\.[a-z]{2,}$/,
                  message: 'Email no válido'
                },
                // validate: (value) => {
                //   if (value.endsWith('.es')) return true;
                //   else return 'No puede ser un email NO ESPAÑOL';
                // }
                validate: (value) => value.endsWith('.es') || 'No puede ser un email NO ESPAÑOL'
              })}
            />
            {errors.email && <span className='text-red-400 absolute top-full left-0 text-xs'>{errors.email.message}</span>}
          </div>
        </label>

        <label className='flex justify-between items-center'>
          Foto:
          <div className='relative'>
            <input
              type="url"
              className='peer outline-none ring-2 ring-transparent focus:ring-violet-300 border-2 rounded px-4 py-2'
              {...register('photo', {
                required: 'Campo obligatorio',
                pattern: {
                  value: /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/,
                  message: 'URL no válida'
                }
              })}
            />
            {errors.photo && <span className='text-red-400 absolute top-full left-0 text-xs'>{errors.photo.message}</span>}
          </div>
        </label>
        <label className='flex justify-between items-center'>
          Contraseña:
          <div className='relative'>
            <input
              type="text"
              className='peer outline-none ring-2 ring-transparent focus:ring-violet-300 border-2 rounded px-4 py-2'
              {...register('password', {
                required: 'Campo obligatorio',
                pattern: {
                  value: /^(?![0-9]{6})[0-9a-zA-Z]{4,8}$/,
                  message: 'De 4 a 8 letras y números'
                }
              })}
            />
            {errors.password && <span className='text-red-400 absolute top-full left-0 text-xs'>{errors.password.message}</span>}
          </div>
        </label>
        <label className='flex justify-between items-center'>
          Repetir contraseña:
          <div className='relative'>
            <input
              type="text"
              className='peer outline-none ring-2 ring-transparent focus:ring-violet-300 border-2 rounded px-4 py-2'
              {...register('repeatPassword', {
                required: 'Campo obligatorio',
                validate: (value) => watch('password') === value || 'Las contraseñas no coinciden'
              })}
            />
            {errors.repeatPassword && <span className='text-red-400 absolute top-full left-0 text-xs'>{errors.repeatPassword.message}</span>}
          </div>
        </label>

        <Button disabled={!isValid}>Regístrate</Button>
      </form>
    </>
  );
}

export default Register;
