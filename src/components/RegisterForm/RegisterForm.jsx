import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSingUp } from 'redux/operations';
import { Button } from '@mui/material';
import { Form } from './Register.styled';

export default function RegisterForm() {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.auth);

  function registerForm(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const obj = {
      email,
      password,
      name,
    };
    setError(false);
    dispatch(userSingUp(obj))
      .unwrap()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        setError(true);
      });
  }
  return (
    <Form onSubmit={registerForm}>
      <h2 className='titulo'>Registrarse </h2>
      <br />
      <input type="text" name="name" placeholder="Introduzca su nombre" />
      <input type="email" name="email" placeholder=" Introduzca email" />
      <input type="password" name="password" placeholder="Introduzca password" />
     <div className='containerbutton'>
       <Button  className='containerbutton' type="submit" variant="contained">
       Registrar 
       </Button>
     </div>
      {isLoading && <div className='Cargando'>¡Espera, se está cargando....!</div>}
      {error && <div className='error'>ERROR VUELVE A INTENTEAR</div>}
    </Form>
  );
}
