// TODO: testar reducer
import { Reducer } from 'redux';

import { AppStatusAction, AppStatusActionTypes, AppStatusState } from './types';

export const initialState: AppStatusState = {
  loading: false
};

export const appStatusReducer: Reducer<AppStatusState, AppStatusAction> = (
  state = initialState,
  action: AppStatusAction
): AppStatusState => {
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
