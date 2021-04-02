// TODO: testar reducer
import { Reducer } from 'redux';

import { DashboardActionTypes, DashboardState } from './types';

export const initialState: DashboardState = {
  purchases: []
};

export const dashboardReducer: Reducer<DashboardState> = (state = initialState, action): DashboardState => {
  const { payload } = action;

  switch (action.type) {
    case DashboardActionTypes.CHANGE_PURCHASES:
      return {
        ...state,
        purchases: payload
      };

    default:
      return state;
  }
};

export default dashboardReducer;
