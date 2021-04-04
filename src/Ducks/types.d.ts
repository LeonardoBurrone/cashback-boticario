import { AppStatusState } from './AppStatus/types';
import { BalanceState } from './Balance/types';
import { DashboardState } from './Dashboard/types';

export as namespace reducers;

export type rootReducer = {
  appStatus: AppStatusState;
  balance: BalanceState;
  dashboard: DashboardState;
};
