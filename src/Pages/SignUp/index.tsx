import { Divider } from '@material-ui/core';
import React, { useState } from 'react';

import Footer from './Footer';
import Information from './Information';
import { CBContainer, CBContent, Logo, Title } from './styles';

// TODO: colocar Logo

const SignUp: React.FunctionComponent = () => {
  const [document, setDocument] = useState<string>('');
  const [documentError, setDocumentError] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [usernameError, setUsernameError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const updateState = {
    document: (value: string) => {
      setDocument(value);
      setDocumentError(value.length > 0 ? '' : 'Campo obrigatório');
    },
    email: (value: string) => {
      setEmail(value);
      setEmailError(value.length > 0 ? '' : 'Campo obrigatório');
    },
    password: (value: string) => {
      setPassword(value);
      setPasswordError(value.length > 0 ? '' : 'Campo obrigatório');
    },
    username: (value: string) => {
      setUsername(value);
      setUsernameError(value.length > 0 ? '' : 'Campo obrigatório');
    }
  };

  const changeValue = (type: 'document' | 'email' | 'username' | 'password', value: string) => {
    updateState[type](value);
  };

  const signIn = () => {
    // TODO: fazer
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

export default SignUp;
