import React, { memo, useState } from 'react';
import './ContactForm.css';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { postContact } from 'redux/operations';
import { selectContacts, tokenUser } from 'redux/selectors';

const fieldIdName = nanoid();
const fieldIdNumber = nanoid();

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { items: contacts } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const token = useSelector(tokenUser);

  const checkContactName = () => {
    return contacts.some(el => el.name === name);
  };

  const onChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn('Échale un vistazo');
        break;
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    if (checkContactName()) {
      Notiflix.Notify.failure(`${name} ya esta en contactos.`);
      return;
    }

    const obj = {
      name,
      number,
      token,
    };

    dispatch(postContact(obj));

    setName('');
    setNumber('');
  };

  return (
    <>
      <div className='containerform'>
        <form className="formInput" onSubmit={onSubmit}>
          <div className="input">
            <label htmlFor={fieldIdName}>Nombre</label>
            <input
              type="text"
              name="name"
              value={name}
              id={fieldIdName}
              onChange={onChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="El nombre puede contener solo letras, apóstrofe, guión y espacios. Por ejemplo Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div className="input">
            <label htmlFor={fieldIdNumber}>Numero</label>
            <input
              type="tel"
              name="number"
              value={number}
              id={fieldIdNumber}
              onChange={onChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="El número de teléfono debe ser dígitos y puede contener espacios, guiones, paréntesis y puede comenzar con +"
              required
            />
          </div>
          <button className="button" type="submit">
            Agregar contacto
          </button>
        </form>
      </div>
    </>
  );
}

export default memo(ContactForm);
