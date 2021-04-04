import { Divider, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Information from './Information';

import Footer from '../../Components/Footer';
import { loginAction } from '../../Ducks/Login/Actions';
import { validateEmail } from '../../Services/Validate';
import { CBContainer, CBContent, CBToolbar } from '../../Styles/Common';

const Login: React.FunctionComponent = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const dispatch = useDispatch();
  const theme = useTheme();
  const updateState = {
    email: (value: string) => {
      setEmail(value);
      setEmailError(validateEmail(value));
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
      <CBToolbar theme={theme} />
      <CBContent elevation={3}>
        <Typography variant="h5">Login</Typography>
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
