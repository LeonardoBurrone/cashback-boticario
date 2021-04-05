import { BalanceActionTypes, ChangeBalanceAction, ChangeBalanceErrorAction, FetchBalanceAction } from './types';

export const changeBalanceAction = (payload: string): ChangeBalanceAction => ({
  payload,
  type: BalanceActionTypes.CHANGE_BALANCE
});

export const changeBalanceErrorAction = (payload: boolean): ChangeBalanceErrorAction => ({
  payload,
  type: BalanceActionTypes.CHANGE_BALANCE_ERROR
});

export const fetchBalanceAction = (): FetchBalanceAction => ({
  type: BalanceActionTypes.FETCH_BALANCE
});
