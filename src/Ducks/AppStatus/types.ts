export enum AppStatusActionTypes {
  CHANGE_IS_LOGGED_IN = 'CHANGE_IS_LOGGED_IN',
  CHANGE_LOADING = 'CHANGE_LOADING',
  CHANGE_LOADING_MESSAGE = 'CHANGE_LOADING_MESSAGE',
  CHANGE_REQUEST_FAILED = 'CHANGE_REQUEST_FAILED'
}

export type AppStatusState = {
  isLoggedIn: boolean;
  loading: boolean;
  loadingMessage: string;
  requestFailed: boolean;
};

export type ChangeIsLoggedInAction = {
  payload: boolean;
  type: typeof AppStatusActionTypes.CHANGE_IS_LOGGED_IN;
};

export type ChangeLoadingAction = {
  payload: boolean;
  type: typeof AppStatusActionTypes.CHANGE_LOADING;
};

export type ChangeLoadingMessageAction = {
  payload: string;
  type: typeof AppStatusActionTypes.CHANGE_LOADING_MESSAGE;
};

export type ChangeRequestErrorAction = {
  payload: boolean;
  type: typeof AppStatusActionTypes.CHANGE_REQUEST_FAILED;
};
