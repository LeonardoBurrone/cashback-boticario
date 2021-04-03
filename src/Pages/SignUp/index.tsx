import { Divider } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Information from './Information';
import { CBContainer, CBContent, Logo, Title } from './styles';

import Footer from '../../Components/Footer';
import { signUpAction } from '../../Ducks/SignUp/Actions';

// TODO: colocar Logo

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
  const updateState = {
    document: (value: string) => {
      setDocument(value);
      setDocumentError(value.length > 0 ? '' : 'Campo obrigatório');
    },
    email: (value: string) => {
      setEmail(value);
      setEmailError(value.length > 0 ? '' : 'Campo obrigatório');
    },
    name: (value: string) => {
      setName(value);
      setNameError(value.length > 0 ? '' : 'Campo obrigatório');
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
      <CBContent elevation={3}>
        <Logo>
          <p>Logo</p>
        </Logo>
        <Title>
          <p>SignUp</p>
        </Title>
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
          primaryButtonText={'Cadastrar'}
          route={'/'}
          secondaryButton={true}
          secondaryButtonText={'Voltar'}
        />
      </CBContent>
    </CBContainer>
  );
};

export default SignUp;
