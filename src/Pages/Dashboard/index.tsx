import { Grid, Paper } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CBContainer } from './styles';

import { fetchPurchasesAction } from '../../Ducks/Dashboard/Actions';
import { Purchase } from '../../Ducks/Dashboard/types';
import { CBToolbar } from '../../Styles/Common';

const Dashboard: React.FunctionComponent = () => {
  const fetchPurchasesError = useSelector((state: reducers.rootReducer) => state.dashboard.fetchPurchasesError);
  const purchases = useSelector((state: reducers.rootReducer) => state.dashboard.purchases);
  const dispatch = useDispatch();
  const theme = useTheme();

  React.useEffect(() => {
    dispatch(fetchPurchasesAction());
  }, []);

  const renderPurchases = () => {
    if (!fetchPurchasesError) {
      if (purchases.length > 0) {
        return (
          <React.Fragment>
            {purchases.map((purchase: Purchase) => {
              return (
                <Grid key={`${purchase.id}`} item>
                  <Paper>item {`${purchase.id}`}</Paper>
                </Grid>
              );
            })}
          </React.Fragment>
        );
      }

      return <div>Lista vazia</div>;
    }

    return <div>Erro</div>;
  };

  return (
    <CBContainer fixed>
      <CBToolbar theme={theme} />
      <Grid container spacing={1}>
        {renderPurchases()}
      </Grid>
    </CBContainer>
  );
};

export default Dashboard;
