// TODO: testar reducer
import { Reducer } from 'redux';

import { AppStatusActionTypes, AppStatusState } from './types';

export const initialState: AppStatusState = {
  loading: false
};

export const appStatusReducer: Reducer<AppStatusState> = (state = initialState, action): AppStatusState => {
  const { payload } = action;

  switch (action.type) {
    case AppStatusActionTypes.CHANGE_LOADING:
      return {
        ...state,
        loading: payload
      };

    default:
      return state;
  }
};

export default appStatusReducer;
