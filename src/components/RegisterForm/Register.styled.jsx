import styled from '@emotion/styled';

export const Form = styled.form`
  background-color: #b96feeba;
  
  
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #030200;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
  height: 500px;
  padding: 16px;

  input {
    padding: 8px 12px;
    border: 1px solid #a033ad;
    border-radius: 15px;
  }

  button {
    background-color: #555febba;
    text-transform: uppercase;
    border-radius: 10px;
    border: 1px solid #851111b9;
    cursor: pointer;
    width: 200px;
    
  }
  .containerbutton{
    display: flex;
    align-items: center;
    justify-content: center;
    

  }
  .Cargando {
    font-size:20px ;
    color: white;
    background-color: #ad337652;
    text-align: center;
    border-radius: 10px;;
  }
  .error{
    font-size:20px ;
    color: white;
    background-color: #ad337652;
    text-align: center;
    border-radius: 10px;
  }
  .titulo{
font-size: 3rem ;
display: flex;
align-items: center;
justify-content: center;
color: white;
  }
`;
