import { Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from './List';
import { Information } from './styles';

import { fetchBalanceAction } from '../../Ducks/Balance/Actions';
import { fetchPurchasesAction } from '../../Ducks/Dashboard/Actions';
import { CBContainer, CBContent, CBToolbar } from '../../Styles/Common';

const Dashboard: React.FunctionComponent = () => {
  const balance = useSelector((state: reducers.rootReducer) => state.balance.balance);
  const balanceError = useSelector((state: reducers.rootReducer) => state.balance.balanceError);
  const fetchPurchasesError = useSelector((state: reducers.rootReducer) => state.dashboard.fetchPurchasesError);
  const purchases = useSelector((state: reducers.rootReducer) => state.dashboard.purchases);
  const dispatch = useDispatch();
  const theme = useTheme();

  React.useEffect(() => {
    dispatch(fetchBalanceAction());
    dispatch(fetchPurchasesAction());
  }, []);

  const renderPurchases = () => {
    if (!fetchPurchasesError) {
      if (purchases.length > 0) {
        return <List purchases={purchases} />;
      }

      return (
        <Grid item xs={10}>
          <CBContent>
            <Information>
              <Typography variant="h5">Nenhuma compra cadastrada</Typography>
            </Information>
          </CBContent>
        </Grid>
      );
    }

    return (
      <Grid item xs={10}>
        <CBContent>
          <Information>
            <Typography variant="h5">Erro ao buscar as compras cadastradas</Typography>
          </Information>
        </CBContent>
      </Grid>
    );
  };

  return (
    <CBContainer fixed>
      <CBToolbar theme={theme} />
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <CBContent>
            <Information>
              {balanceError && <Typography variant="h5">Erro ao buscar o cashback acumulado</Typography>}
              {!balanceError && (
                <>
                  <Typography variant="h5">Cashback acumulado</Typography>
                  <Typography variant="h6">R${balance}</Typography>
                </>
              )}
            </Information>
          </CBContent>
        </Grid>
        {renderPurchases()}
      </Grid>
    </CBContainer>
  );
};

export default Dashboard;
