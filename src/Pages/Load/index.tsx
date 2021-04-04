import { CircularProgress, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
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
      {requestFailed && (
        <ButtonDiv>
          <IconButton aria-label="close" onClick={closeDialog}>
            <CloseIcon />
          </IconButton>
        </ButtonDiv>
      )}
      <Typography variant="h5" gutterBottom>
        {loadingMessage}
      </Typography>
      {!requestFailed && <CircularProgress />}
    </CBDialog>
  );
};

export default Load;
