import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from 'redux/operations';
import { Button } from '@mui/material';
import { Form } from './Login.styled';

export default function LoginForm() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.auth);
  const [error, setError] = useState(false);

  function loginForm(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const obj = {
      email,
      password,
    };
    setError(false);
    dispatch(userLogin(obj))
      .unwrap()
      .then(res => {})
      .catch(err => {
        setError(true);
      });
  }

  return (
    <Form onSubmit={loginForm}>
      <input type="email" name="email" placeholder="Ingresa email" />
      <input type="password" name="password" placeholder=" Ingresa password" />
      <Button type="submit" variant="contained">
        Iniciar
      </Button>
      {isLoading && <div>¡Espera, se está cargando!</div>}
      {error && <div>error de inicio de sesion, vuelve a intentar</div>}
    </Form>
  );
}
