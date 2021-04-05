import { Grid } from '@material-ui/core';
import React, { useState } from 'react';

import ToggleVisibility from '../../../Components/ToggleVisibility';
import { CBTextField } from '../../../Styles/Common';

export type Props = {
  changeValue: (type: 'email' | 'password', value: string) => void;
  email: string;
  emailError: string;
  password: string;
  passwordError: string;
};

export const Information: React.FunctionComponent<Props> = (props: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const changeValue = (type: 'email' | 'password') => (event: React.ChangeEvent<HTMLInputElement>) => {
    props.changeValue(type, event.target.value);
  };

  return (
    <Grid container spacing={1}>
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
