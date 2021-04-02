import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CBContainer, CBContent } from './styles';

import { fetchPurchasedItemsAction } from '../../Ducks/Dashboard/Actions';
import { CBToolbar } from '../../Styles/Common';

const Dashboard: React.FunctionComponent = () => {
  const purchases = useSelector((state: reducers.rootReducer) => state.dashboard.purchases);
  const dispatch = useDispatch();
  const theme = useTheme();

  React.useEffect(() => {
    dispatch(fetchPurchasedItemsAction());
  }, []);

  return (
    <CBContainer fixed>
      <CBToolbar theme={theme} />
      <CBContent>Dashboard</CBContent>
    </CBContainer>
  );
};

export default Dashboard;
