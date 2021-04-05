export enum BalanceActionTypes {
  CHANGE_BALANCE = 'CHANGE_BALANCE',
  CHANGE_BALANCE_ERROR = 'CHANGE_BALANCE_ERROR',
  FETCH_BALANCE = 'FETCH_BALANCE'
}

export type BalanceState = {
  balance: string;
  balanceError: boolean;
};

export type ChangeBalanceAction = {
  payload: string;
  type: typeof BalanceActionTypes.CHANGE_BALANCE;
};

export type ChangeBalanceErrorAction = {
  payload: boolean;
  type: typeof BalanceActionTypes.CHANGE_BALANCE_ERROR;
};

export type FetchBalanceAction = {
  type: typeof BalanceActionTypes.FETCH_BALANCE;
};

export type BalanceResponse = {
  balance: string;
};
