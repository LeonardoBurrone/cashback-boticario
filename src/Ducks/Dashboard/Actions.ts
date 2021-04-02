// TODO: testar actions
import { ChangePuchasesAction, FetchPuschasedItemsAction, DashboardActionTypes, Purchase } from './types';

export const changePuchasesAction = (payload: Purchase[]): ChangePuchasesAction => ({
  payload,
  type: DashboardActionTypes.CHANGE_PURCHASES
});

export const fetchPurchasedItemsAction = (): FetchPuschasedItemsAction => ({
  type: DashboardActionTypes.FETCH_PURCHASED_ITEMS
});
