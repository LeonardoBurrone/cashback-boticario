import { Grid } from '@material-ui/core';
import React, { useState } from 'react';

import ToggleVisibility from '../../../Components/ToggleVisibility';
import { CBTextField } from '../../../Styles/Common';

type Props = {
  changeValue: (type: 'username' | 'password', value: string) => void;
  password: string;
  passwordError: string;
  username: string;
  usernameError: string;
};

const Information: React.FunctionComponent<Props> = (props: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const changeValue = (type: 'username' | 'password') => (event: React.ChangeEvent<HTMLInputElement>) => {
    props.changeValue(type, event.target.value);
  };

  return (
    <Grid container spacing={1}>
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
