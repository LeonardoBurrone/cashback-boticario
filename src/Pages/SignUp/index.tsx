import { Divider, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Information from './Information';

import Footer from '../../Components/Footer';
import { signUpAction } from '../../Ducks/SignUp/Actions';
import { CBContainer, CBContent, CBToolbar } from '../../Styles/Common';
import { documentMask, unmask } from '../../Services/Mascara';
import { validateDocument, validateEmail, validateName } from '../../Services/Validate';

const SignUp: React.FunctionComponent = () => {
  const [document, setDocument] = useState<string>('');
  const [documentError, setDocumentError] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const dispatch = useDispatch();
  const theme = useTheme();

  const updateState = {
    document: (value: string) => {
      setDocument(documentMask(value.length < 15 ? value : document));
      setDocumentError(validateDocument(unmask(value.length < 15 ? value : document)));
    },
    email: (value: string) => {
      setEmail(value);
      setEmailError(validateEmail(value));
    },
    name: (value: string) => {
      setName(value);
      setNameError(validateName(value));
    },
    password: (value: string) => {
      setPassword(value);
      setPasswordError(value.length > 0 ? '' : 'Campo obrigatório');
    }
  };

  const changeValue = (type: 'document' | 'email' | 'name' | 'password', value: string) => {
    updateState[type](value);
  };

  const signUp = () => {
    dispatch(
      signUpAction({
        document,
        email,
        name,
        password
      })
    );
  };

  return (
    <CBContainer maxWidth="sm">
      <CBToolbar theme={theme} />
      <CBContent elevation={3}>
        <Typography variant="h5">Crie sua conta</Typography>
        <Divider />
        <Information
          changeValue={changeValue}
          document={document}
          documentError={documentError}
          email={email}
          emailError={emailError}
          name={name}
          nameError={nameError}
          password={password}
          passwordError={passwordError}
        />
        <Footer
          buttonDisabled={!document || !email || !name || !password}
          onClick={signUp}
          primaryButtonText={'Criar'}
          route={'/'}
          secondaryButton={true}
          secondaryButtonText={'Voltar'}
        />
      </CBContent>
    </CBContainer>
  );
};

export default SignUp;
