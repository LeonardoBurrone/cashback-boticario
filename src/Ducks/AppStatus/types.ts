export enum AppStatusActionTypes {
  CHANGE_LOADING = 'CHANGE_LOADING'
}

export type AppStatusState = {
  loading: boolean;
};

export type ChangeLoadingAction = {
  payload: boolean;
  type: typeof AppStatusActionTypes.CHANGE_LOADING;
};
