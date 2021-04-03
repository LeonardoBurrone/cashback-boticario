// TODO: testar actions
import { AppStatusActionTypes, ChangeIsLoggedInAction, ChangeLoadingAction, ChangeLoadingMessageAction } from './types';

export const changeIsLoggedInAction = (payload: boolean): ChangeIsLoggedInAction => ({
  payload,
  type: AppStatusActionTypes.CHANGE_IS_LOGGED_IN
});

export const changeLoadingAction = (payload: boolean): ChangeLoadingAction => ({
  payload,
  type: AppStatusActionTypes.CHANGE_LOADING
});

export const changeLoadingMessageAction = (payload: string): ChangeLoadingMessageAction => ({
  payload,
  type: AppStatusActionTypes.CHANGE_LOADING_MESSAGE
});
