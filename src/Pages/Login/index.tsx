import { Divider } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Footer from './Footer';
import Information from './Information';
import { CBContainer, CBContent, Logo, Title } from './styles';

import { loginAction } from '../../Ducks/Login/Actions';
import CentralNavigationService from '../../Services/Navigation';

// TODO: colocar Logo

const Login: React.FunctionComponent = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [usernameError, setUsernameError] = useState<string>('');
  const dispatch = useDispatch();
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
    CentralNavigationService.navigate('/main');
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
        <Footer password={password} signIn={signIn} username={username} />
      </CBContent>
    </CBContainer>
  );
};

export default Login;
