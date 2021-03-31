// TODO: testar actions
import { AppStatusActionTypes, ChangeLoadingAction } from './types';

export const changeBillDataAction = (payload: boolean): ChangeLoadingAction => ({
  payload,
  type: AppStatusActionTypes.CHANGE_LOADING
});
