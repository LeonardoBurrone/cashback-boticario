import { combineReducers } from 'redux';

import { appStatusReducer } from '../Ducks/AppStatus/Reducer';
import { dashboardReducer } from '../Ducks/Dashboard/Reducer';

const appReducer = combineReducers({
  appStatus: appStatusReducer,
  dashboard: dashboardReducer
});

const rootReducer = (state: any, action: any) => appReducer(state, action);

export default rootReducer;
