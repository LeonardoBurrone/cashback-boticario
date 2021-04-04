import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import React from 'react';

import { CBKeyboardDatePicker } from './styles';

import { CBTextField } from '../../../Styles/Common';

type Props = {
  changeValue: (type: 'code' | 'date' | 'price', value: string) => void;
  code: string;
  codeError: string;
  date: string;
  dateError: string;
  price: string;
  priceError: string;
};

const Information: React.FunctionComponent<Props> = (props: Props) => {
  const [selectedDate, setSelectedDate] = React.useState<MaterialUiPickersDate>(null);

  const changeValue = (type: 'code' | 'price') => (event: React.ChangeEvent<HTMLInputElement>) => {
    props.changeValue(type, event.target.value);
  };

  const handleDateChange = (date: MaterialUiPickersDate) => {
    if (date) {
      props.changeValue('date', date.toISOString());
      setSelectedDate(date);
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <CBTextField
          autoFocus
          value={props.code}
          onChange={changeValue('code')}
          label="Código"
          id="code"
          margin="normal"
          helperText={props.codeError || 'Insira o código da compra'}
          error={props.codeError.length > 0}
        />
      </Grid>
      <Grid item xs={12}>
        <CBTextField
          label="Valor"
          id="price"
          onChange={changeValue('price')}
          margin="normal"
          type={'number'}
          helperText={props.priceError || 'Insira o valor da compra'}
          error={props.priceError.length > 0}
        />
      </Grid>
      <Grid item xs={12}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <CBKeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Selecione a data da compra"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>
  );
};

export default Information;
