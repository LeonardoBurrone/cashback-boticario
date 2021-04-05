import { combineReducers } from 'redux';

import { appStatusReducer } from '../Ducks/AppStatus/Reducer';
import { balanceReducer } from '../Ducks/Balance/Reducer';
import { dashboardReducer } from '../Ducks/Dashboard/Reducer';
import { LoginActionTypes } from '../Ducks/Login/types';

const appReducer = combineReducers({
  appStatus: appStatusReducer,
  balance: balanceReducer,
  dashboard: dashboardReducer
});

const rootReducer = (state: any, action: any) => {
  if (action.type === LoginActionTypes.LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
