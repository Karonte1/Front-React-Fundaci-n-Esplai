type Errors = {
  email: string;
  password: string;
}

function logInValidations (value: string, name: string, errors: Errors) {
  const emailRegEx = /^.+@[^.].*\.[a-z]{2,}$/;
  const passwordRegEx = /^[0-9a-zA-Z]{4,12}$/;

  const checkErrors = { ...errors };

  if (name === 'email' && !emailRegEx.test(value)) checkErrors.email = 'Email no válido';
  else checkErrors.email = '';

  if (name === 'password' && !passwordRegEx.test(value)) checkErrors.password = 'Campo requerido. De 4 a 12 letras o números';
  else checkErrors.password = '';

  return checkErrors;
}

export { logInValidations };
