// TODO: testar actions
import { AppStatusActionTypes, ChangeLoadingAction } from './types';

export const changeLoadingAction = (payload: boolean): ChangeLoadingAction => ({
  payload,
  type: AppStatusActionTypes.CHANGE_LOADING
});
