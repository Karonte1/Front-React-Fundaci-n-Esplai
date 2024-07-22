import { useState } from 'react';
import { Typography, Input } from '../components';
import { logInValidations } from '../config/formValidations';
import Button from '../components/Button';
import axiosAPI from '../config/axios';
import { toast } from 'react-toastify'
import useUserContext from '../hooks/useUserContext'

function LogIn () {
  const { logIn } = useUserContext();

  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const [touchedInputs, setTouchedInputs] = useState({
    email: false,
    password: false
  });

  const isValid = Object.values(errors).every(error => error === '');
  const isTouched = Object.values(touchedInputs).some(touched => touched);
  const isDirty = Object.values(formValues).some(value => value !== '');

  function handleFormChange (event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;

    const checkErrors = logInValidations(value, name, errors);

    setErrors({ ...errors, ...checkErrors });
    setFormValues({ ...formValues, [name]: value });
  }

  async function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (errors.email || errors.password) return;

    const loginUser = {
      email: formValues.email,
      password: formValues.password
    };

    try {
      //* la manera en que se hace casi siempre. enviamos en el body de la request el objeto con los datos del login para que el backend lo valide
      // const response = await axiosAPI.post('https://boockstore-codenotch.onrender.com/login', loginUser);
      // const response = await fetch('https://boockstore-codenotch.onrender.com/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(loginUser)
      // });
      // console.log(response);

      //* en la api que estamos usando no valida email y contraseña igual que las demás, lo vamos a hacer en la url
      const { email, password } = formValues;
      const response = await axiosAPI.get(`/users?email=${email.toLowerCase()}&password=${password}`);
      const user = response.data[0];
      if (!user) {
        throw new Error('Usuario o contraseña incorrectos');
      }
      logIn(user);
      toast.success('Has iniciado sesión');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  return (
    <>
      <Typography as="h1">Log In</Typography>

      <form onSubmit={handleSubmit} className='bg-white p-8 rounded my-12 flex flex-col gap-8 max-w-xl'>
        <Input
          type="email"
          value={formValues.email}
          label="Email:"
          name="email"
          handler={handleFormChange}
          error={errors.email}
          onBlur={() => setTouchedInputs({ ...touchedInputs, email: true })}
        />

        <Input
          type="password"
          value={formValues.password}
          label="Password:"
          name="password"
          handler={handleFormChange}
          error={errors.password}
          onBlur={() => setTouchedInputs({ ...touchedInputs, password: true })}
        />

        <Button disabled={!isValid || !isTouched || !isDirty}>Log In</Button>

      </form>

    </>
  );
}

export default LogIn;
