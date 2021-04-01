import React, { useState } from 'react';

import Information from './Information';
import { CBContainer, Logo } from './styles';

// TODO: colocar Logo

const Login: React.FunctionComponent = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [usernameError, setUsernameError] = useState<string>('');

  const changeValue = (type: 'USERNAME' | 'PASSWORD', value: string) => {
    // TODO: remover
    console.log('Tipo - valor: ', type, value);

    if (type === 'USERNAME') {
      setUsername(value);
      setUsernameError(value.length > 0 ? '' : 'Campo obrigatório');
    } else {
      setPassword(value);
      setPasswordError(value.length > 0 ? '' : 'Campo obrigatório');
    }
  };

  return (
    <CBContainer maxWidth="sm">
      <Logo>
        <p>Logo</p>
      </Logo>
      <Information
        changeValue={changeValue}
        password={password}
        passwordError={passwordError}
        username={username}
        usernameError={usernameError}
      />
    </CBContainer>
  );
};

export default Login;
