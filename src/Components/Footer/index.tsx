import { Button, Grid } from '@material-ui/core';
import React from 'react';

import { CBContainer, CBGrid, CBLink } from './styles';

export type Props = {
  buttonDisabled: boolean;
  onClick: () => void;
  primaryButtonText: string;
  route?: string;
  secondaryButton?: boolean;
  secondaryButtonText?: string;
};

export const Footer: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <CBContainer>
      <CBGrid>
        <Grid container alignItems={'center'} justify={'flex-end'} spacing={3}>
          {props.secondaryButton && (
            <CBLink to={props?.route ?? '/'}>
              <Button color="primary" variant={'text'}>
                {props.secondaryButtonText}
              </Button>
            </CBLink>
          )}
          <Button color="secondary" onClick={props.onClick} variant={'contained'} disabled={props.buttonDisabled}>
            {props.primaryButtonText}
          </Button>
        </Grid>
      </CBGrid>
    </CBContainer>
  );
};

export default Footer;
