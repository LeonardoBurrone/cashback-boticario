import { AppStatusState } from './AppStatus/types';

export as namespace reducers;

export type rootReducer = {
  appStatus: AppStatusState;
};
