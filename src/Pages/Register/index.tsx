import { useTheme } from '@material-ui/core/styles';
import React from 'react';

import { CBContainer } from './styles';

import { CBToolbar } from '../../Styles/Common';

const Register: React.FunctionComponent = () => {
  const theme = useTheme();

  return (
    <CBContainer maxWidth="sm">
      <CBToolbar theme={theme} />
      <div>Register</div>
    </CBContainer>
  );
};

export default Register;
