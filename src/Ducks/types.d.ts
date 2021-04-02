import { AppStatusState } from './AppStatus/types';
import { DashboardState } from './Dashboard/types';

export as namespace reducers;

export type rootReducer = {
  appStatus: AppStatusState;
  dashboard: DashboardState;
};
