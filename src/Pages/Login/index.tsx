import { Divider } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Information from './Information';
import { CBContainer, CBContent, Logo, Title } from './styles';

import Footer from '../../Components/Footer';
import { loginAction } from '../../Ducks/Login/Actions';

// TODO: colocar Logo

const Login: React.FunctionComponent = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [usernameError, setUsernameError] = useState<string>('');
  const dispatch = useDispatch();
  const history = useHistory();
  const updateState = {
    password: (value: string) => {
      setPassword(value);
      setPasswordError(value.length > 0 ? '' : 'Campo obrigatório');
    },
    username: (value: string) => {
      setUsername(value);
      setUsernameError(value.length > 0 ? '' : 'Campo obrigatório');
    }
  };

  const changeValue = (type: 'username' | 'password', value: string) => {
    updateState[type](value);
  };

  const signIn = () => {
    dispatch(
      loginAction({
        password,
        username
      })
    );
    // TODO: remover
    history.push('/dashboard');
  };

  return (
    <CBContainer maxWidth="sm">
      <CBContent elevation={3}>
        <Logo>
          <p>Logo</p>
        </Logo>
        <Title>
          <p>Login</p>
        </Title>
        <Divider />
        <Information
          changeValue={changeValue}
          password={password}
          passwordError={passwordError}
          username={username}
          usernameError={usernameError}
        />
        <Footer
          buttonDisabled={!password || !username}
          onClick={signIn}
          primaryButtonText={'Entrar'}
          route={'/sign-up'}
          secondaryButton={true}
          secondaryButtonText={'Cadastrar conta'}
        />
      </CBContent>
    </CBContainer>
  );
};

export default Login;
