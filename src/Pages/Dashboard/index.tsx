import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from './List';
import { CBContainer } from './styles';

import { fetchPurchasesAction } from '../../Ducks/Dashboard/Actions';
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
        return <List purchases={purchases} />;
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
