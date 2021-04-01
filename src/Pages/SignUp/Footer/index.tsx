import { Button, Grid } from '@material-ui/core';
import React from 'react';

import { CBContainer, CBGrid, CBLink } from './styles';

type Props = {
  document: string;
  email: string;
  password: string;
  signUp: () => void;
  username: string;
};

const Footer: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <CBContainer>
      <CBGrid>
        <Grid container alignItems={'center'} justify={'flex-end'} spacing={3}>
          <CBLink to={'/'}>
            <Button variant={'text'}>Voltar</Button>
          </CBLink>
          <Button
            onClick={props.signUp}
            variant={'contained'}
            disabled={!props.document || !props.email || !props.password || !props.username}
          >
            Cadastrar
          </Button>
        </Grid>
      </CBGrid>
    </CBContainer>
  );
};

export default Footer;
