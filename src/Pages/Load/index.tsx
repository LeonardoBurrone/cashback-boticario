import { CircularProgress, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';

import { CBDialog } from './styles';

const Load: React.FunctionComponent = () => {
  const loading = useSelector((state: reducers.rootReducer) => state.appStatus.loading);
  const loadingMessage = useSelector((state: reducers.rootReducer) => state.appStatus.loadingMessage);
  const theme = useTheme();

  return (
    <CBDialog aria-labelledby="customized-dialog-title" open={loading} theme={theme}>
      <Typography gutterBottom>{loadingMessage}</Typography>
      <CircularProgress />
    </CBDialog>
  );
};

export default Load;
