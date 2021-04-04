import { Button, CircularProgress, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonDiv, CBDialog } from './styles';

import { changeRequestErrorAction } from '../../Ducks/AppStatus/Actions';

const Load: React.FunctionComponent = () => {
  const loading = useSelector((state: reducers.rootReducer) => state.appStatus.loading);
  const loadingMessage = useSelector((state: reducers.rootReducer) => state.appStatus.loadingMessage);
  const requestFailed = useSelector((state: reducers.rootReducer) => state.appStatus.requestFailed);
  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(changeRequestErrorAction(false));
  };

  return (
    <CBDialog aria-labelledby="customized-dialog-title" open={loading || requestFailed}>
      <Typography variant="h6" gutterBottom>
        {loadingMessage}
      </Typography>
      {!requestFailed && <CircularProgress />}
      {requestFailed && (
        <ButtonDiv>
          <Button color="primary" onClick={closeDialog} variant={'text'}>
            Fechar
          </Button>
        </ButtonDiv>
      )}
    </CBDialog>
  );
};

export default Load;
