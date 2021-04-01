import { Button, Grid } from '@material-ui/core';
import React from 'react';

import { CBContainer, CBGrid, CBLink } from './styles';

type Props = {
  password: string;
  signIn: () => void;
  username: string;
};

const Footer: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <CBContainer>
      <CBGrid>
        <Grid container alignItems={'center'} justify={'flex-end'} spacing={3}>
          <CBLink to={'/sign-up'}>
            <Button variant={'text'}>Cadastrar conta</Button>
          </CBLink>
          <Button onClick={props.signIn} variant={'contained'} disabled={!props.password || !props.username}>
            Entrar
          </Button>
        </Grid>
      </CBGrid>
    </CBContainer>
  );
};

export default Footer;
