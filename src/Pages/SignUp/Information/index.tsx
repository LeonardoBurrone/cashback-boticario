import { Grid } from '@material-ui/core';
import React, { useState } from 'react';

import { CBTextField } from './styles';

import ToggleVisibility from '../../../Components/ToggleVisibility';

type Props = {
  document: string;
  documentError: string;
  email: string;
  emailError: string;
  changeValue: (type: 'document' | 'email' | 'username' | 'password', value: string) => void;
  password: string;
  passwordError: string;
  username: string;
  usernameError: string;
};

const Information: React.FunctionComponent<Props> = (props: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const changeValue = (type: 'document' | 'email' | 'username' | 'password') => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.changeValue(type, event.target.value);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <CBTextField
          autoFocus
          value={props.document}
          onChange={changeValue('document')}
          label="CPF"
          id="document"
          margin="normal"
          helperText={props.documentError || 'Insira seu CPF'}
          error={props.documentError.length > 0}
        />
      </Grid>
      <Grid item xs={12}>
        <CBTextField
          autoFocus
          value={props.email}
          onChange={changeValue('email')}
          label="E-mail"
          id="email"
          margin="normal"
          helperText={props.emailError || 'Insira seu e-mail'}
          error={props.emailError.length > 0}
        />
      </Grid>
      <Grid item xs={12}>
        <CBTextField
          autoFocus
          value={props.username}
          onChange={changeValue('username')}
          label="Usuário"
          id="username"
          margin="normal"
          helperText={props.usernameError || 'Insira o usuário'}
          error={props.usernameError.length > 0}
        />
      </Grid>
      <Grid item xs={12}>
        <CBTextField
          label="Senha"
          id="password"
          onChange={changeValue('password')}
          margin="normal"
          type={showPassword ? 'password' : 'text'}
          helperText={props.passwordError || 'Insira a senha'}
          error={props.passwordError.length > 0}
          InputProps={{
            endAdornment: <ToggleVisibility show={showPassword} toggle={() => setShowPassword(!showPassword)} />
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Information;
