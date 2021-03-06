import { useTheme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Information from './Information';

import Footer from '../../Components/Footer';
import { registerPurchaseAction } from '../../Ducks/Register/Actions';
import { CBContainer, CBContent, CBToolbar } from '../../Styles/Common';

const Register: React.FunctionComponent = () => {
  const [code, setCode] = useState<string>('');
  const [codeError, setCodeError] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [dateError, setDateError] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [priceError, setPriceError] = useState<string>('');
  const dispatch = useDispatch();
  const theme = useTheme();

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

  const isButtonDisabled = () => {
    return !code || codeError.length > 0 || !date || dateError.length > 0 || !price || priceError.length > 0;
  };

  const registerPurchase = () => {
    dispatch(
      registerPurchaseAction({
        code,
        date,
        price
      })
    );
  };

  return (
    <CBContainer maxWidth="sm">
      <CBToolbar theme={theme} />
      <CBContent elevation={3}>
        <Information
          changeValue={changeValue}
          code={code}
          codeError={codeError}
          date={date}
          dateError={dateError}
          price={price}
          priceError={priceError}
        />
        <Footer buttonDisabled={isButtonDisabled()} onClick={registerPurchase} primaryButtonText={'Registrar'} />
      </CBContent>
    </CBContainer>
  );
};

export default Register;
