import { Divider } from '@material-ui/core';
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
  const updateState = {
    code: (value: string) => {
      setCode(value);
      setCodeError(value.length > 0 ? '' : 'Campo obrigatório');
    },
    date: (value: string) => {
      setDate(value);
      setDateError(value.length > 0 ? '' : 'Campo obrigatório');
    },
    price: (value: string) => {
      setPrice(value);
      setPriceError(value.length > 0 ? '' : 'Campo obrigatório');
    }
  };

  const changeValue = (type: 'code' | 'date' | 'price', value: string) => {
    updateState[type](value);
  };

  const registerPurchase = () => {
    // TODO
  };

  return (
    <CBContainer maxWidth="sm">
      <CBContent elevation={3}>
        <p>Logo</p>
        <Divider />
        <Information
          changeValue={changeValue}
          code={code}
          codeError={codeError}
          date={date}
          dateError={dateError}
          price={price}
          priceError={priceError}
        />
        <Footer buttonDisabled={!code || !date || !price} onClick={registerPurchase} primaryButtonText={'Registrar'} />
      </CBContent>
    </CBContainer>
  );
};

export default Register;
