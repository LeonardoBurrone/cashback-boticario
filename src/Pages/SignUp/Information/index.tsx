import { Grid } from '@material-ui/core';
import React, { useState } from 'react';

import ToggleVisibility from '../../../Components/ToggleVisibility';
import { CBTextField } from '../../../Styles/Common';

export type Props = {
  changeValue: (type: 'document' | 'email' | 'name' | 'password', value: string) => void;
  document: string;
  documentError: string;
  email: string;
  emailError: string;
  name: string;
  nameError: string;
  password: string;
  passwordError: string;
};

export const Information: React.FunctionComponent<Props> = (props: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const changeValue = (type: 'document' | 'email' | 'name' | 'password') => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.changeValue(type, event.target.value);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <CBTextField
          autoFocus
          value={props.name}
          onChange={changeValue('name')}
          label="Nome completo"
          id="name"
          margin="normal"
          helperText={props.nameError || 'Insira seu nome completo'}
          error={props.nameError.length > 0}
        />
      </Grid>
      <Grid item xs={12}>
        <CBTextField
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
          label="Senha"
          id="password"
          onChange={changeValue('password')}
          margin="normal"
          type={showPassword ? 'password' : 'text'}
          helperText={props.passwordError || 'Insira sua senha'}
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
