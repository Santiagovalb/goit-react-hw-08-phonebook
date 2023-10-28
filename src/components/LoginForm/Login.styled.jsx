import styled from '@emotion/styled';

export const Form = styled.form`
  background-color: #10a3ec6c;
  
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #0e03a8;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;

  input {
    padding: 8px 12px;
    border: 1px solid #a033ad;
    border-radius: 15px;
  }

  button {
    min-height: 30px;
    background-color: #6769ecbc;
    text-transform: uppercase;
    border-radius: 10px;
    border: 1px solid #781185;
    cursor: pointer;
    padding: 10px 16px;
  }
`;
