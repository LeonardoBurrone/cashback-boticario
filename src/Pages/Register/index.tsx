import { Divider } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React, { useState } from 'react';

import Information from './Information';
import { CBContainer, CBContent } from './styles';

import Footer from '../../Components/Footer';

const Register: React.FunctionComponent = () => {
  const [code, setCode] = useState<string>('');
  const [codeError, setCodeError] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [dateError, setDateError] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [priceError, setPriceError] = useState<string>('');
  const theme = useTheme();

  const registerPurchase = () => {
    // TODO
  };

  return (
    <CBContainer maxWidth="sm">
      <CBContent elevation={3}>
        <p>Logo</p>
        <Divider />
        {/* <Information
          changeValue={changeValue}
          password={password}
          passwordError={passwordError}
          username={username}
          usernameError={usernameError}
        /> */}
        <Footer buttonDisabled={!code || !date || !price} onClick={registerPurchase} primaryButtonText={'Registrar'} />
      </CBContent>
    </CBContainer>
  );
};

export default Register;
