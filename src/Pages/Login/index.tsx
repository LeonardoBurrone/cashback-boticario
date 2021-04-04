import { Divider } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Information from './Information';
import { Logo, Title } from './styles';

import Footer from '../../Components/Footer';
import { loginAction } from '../../Ducks/Login/Actions';
import { CBContainer, CBContent } from '../../Styles/Common';

// TODO: colocar Logo

const Login: React.FunctionComponent = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const dispatch = useDispatch();
  const updateState = {
    email: (value: string) => {
      setEmail(value);
      setEmailError(value.length > 0 ? '' : 'Campo obrigatório');
    },
    password: (value: string) => {
      setPassword(value);
      setPasswordError(value.length > 0 ? '' : 'Campo obrigatório');
    }
  };

  const changeValue = (type: 'email' | 'password', value: string) => {
    updateState[type](value);
  };

  const signIn = () => {
    dispatch(
      loginAction({
        email,
        password
      })
    );
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
          email={email}
          emailError={emailError}
          password={password}
          passwordError={passwordError}
        />
        <Footer
          buttonDisabled={!password || !email}
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
