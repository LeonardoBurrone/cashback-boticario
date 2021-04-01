import { Grid } from '@material-ui/core';
import React, { useState } from 'react';

import { CBTextField } from './styles';

import ToggleVisibility from '../../../Components/ToggleVisibility';

type Props = {
  changeValue: (type: 'USERNAME' | 'PASSWORD', value: string) => void;
  password: string;
  passwordError: string;
  username: string;
  usernameError: string;
};

const Information: React.FunctionComponent<Props> = (props: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const changeValue = (type: 'USERNAME' | 'PASSWORD') => (event: React.ChangeEvent<HTMLInputElement>) => {
    props.changeValue(type, event.target.value);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <CBTextField
          autoFocus
          value={props.username}
          onChange={changeValue('USERNAME')}
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
          onChange={changeValue('PASSWORD')}
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
