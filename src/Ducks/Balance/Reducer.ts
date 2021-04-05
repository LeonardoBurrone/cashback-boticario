import { Reducer } from 'redux';

import { BalanceActionTypes, BalanceState } from './types';

export const initialState: BalanceState = {
  balance: '',
  balanceError: false
};

export const balanceReducer: Reducer<BalanceState> = (state = initialState, action): BalanceState => {
  const { payload } = action;

  switch (action.type) {
    case BalanceActionTypes.CHANGE_BALANCE:
      return {
        ...state,
        balance: payload
      };

    case BalanceActionTypes.CHANGE_BALANCE_ERROR:
      return {
        ...state,
        balanceError: payload
      };

    default:
      return state;
  }
};

export default balanceReducer;
