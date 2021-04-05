import {
  ChangePuchasesAction,
  DashboardActionTypes,
  FetchPuschasesAction,
  FetchPuschasesErrorAction,
  Purchase
} from './types';

export const changePuchasesAction = (payload: Purchase[]): ChangePuchasesAction => ({
  payload,
  type: DashboardActionTypes.CHANGE_PURCHASES
});

export const fetchPurchasesAction = (): FetchPuschasesAction => ({
  type: DashboardActionTypes.FETCH_PURCHASES
});

export const fetchPurchasesErrorAction = (payload: boolean): FetchPuschasesErrorAction => ({
  payload,
  type: DashboardActionTypes.FETCH_PURCHASES_ERROR
});
