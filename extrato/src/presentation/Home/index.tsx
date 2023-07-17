import React, { useState } from 'react';
import loginImg from '../../assets/imgs/login.png'
import { useNavigate } from 'react-router-dom';
import * as S from './styles'

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/extrato', { state: { data: username } });
    
  };

  return (
    <S.indexMain>
      <S.loginImg src={loginImg} id="img-login"/>

      <S.Form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <S.FormGroup>
          <S.Label htmlFor="numeroConta">Entre com numero(id) da conta </S.Label>
          <S.Input
            required
            type="text"
            id="conta"
            value={username}
            onChange={handleUsernameChange}
          />
        </S.FormGroup>
        
        <S.SubmitButton type="submit">Entrar</S.SubmitButton>
      </S.Form>
    </S.indexMain>
  );
};

export default Home;