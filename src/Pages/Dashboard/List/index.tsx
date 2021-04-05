import { Grid, Divider, Typography } from '@material-ui/core';
import moment from 'moment';
import React from 'react';

import { Information } from '../styles';

import { Purchase } from '../../../Ducks/Dashboard/types';
import { CBContent } from '../../../Styles/Common';

type Props = {
  purchases: Purchase[];
};

const List: React.FunctionComponent<Props> = (props: Props) => {
  const translateStatus = {
    Approved: 'Aprovado',
    Rejected: 'Rejeitado',
    Validating: 'Em validação'
  };

  const renderInformation = (description: string, value: string) => {
    return (
      <Information>
        <Typography variant="subtitle1">{description}</Typography>
        <Typography variant="subtitle2">{value}</Typography>
      </Information>
    );
  };

  return (
    <React.Fragment>
      {props.purchases.map((purchase: Purchase, index: number) => {
        return (
          <Grid key={`${purchase.id}${index}`} item xs={10}>
            <CBContent>
              {renderInformation('Código', `${purchase.id}`)}
              <Divider />
              {renderInformation('Valor da compra', `R$${purchase.price}`)}
              <Divider />
              {renderInformation('Data', `${moment(purchase.date).format('DD/MM/YYYY')}`)}
              <Divider />
              {renderInformation('% de cashback', `${purchase.cashbackPercentage}%`)}
              <Divider />
              {renderInformation('Valor do cashback', `R$${purchase.cashbackValue}`)}
              <Divider />
              {renderInformation('Status', `${translateStatus[purchase.status]}`)}
            </CBContent>
          </Grid>
        );
      })}
    </React.Fragment>
  );
};

export default List;
