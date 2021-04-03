export enum AppStatusActionTypes {
  CHANGE_IS_LOGGED_IN = 'CHANGE_IS_LOGGED_IN',
  CHANGE_LOADING = 'CHANGE_LOADING'
}

export type AppStatusState = {
  isLoggedIn: boolean;
  loading: boolean;
};

export type ChangeIsLoggedInAction = {
  payload: boolean;
  type: typeof AppStatusActionTypes.CHANGE_IS_LOGGED_IN;
};

export type ChangeLoadingAction = {
  payload: boolean;
  type: typeof AppStatusActionTypes.CHANGE_LOADING;
};
