export enum DashboardActionTypes {
  CHANGE_PURCHASES = 'CHANGE_PURCHASES',
  FETCH_PURCHASED_ITEMS = 'FETCH_PURCHASED_ITEMS'
}

export type Purchase = {
  cashbackPercentage: number;
  cashbackValue: number;
  date: string;
  id: number;
  price: number;
  status: 'Approved' | 'Rejected' | 'Validating';
};

export type DashboardState = {
  purchases: Purchase[];
};

export type ChangePuchasesAction = {
  payload: Purchase[];
  type: typeof DashboardActionTypes.CHANGE_PURCHASES;
};

export type FetchPuschasedItemsAction = {
  type: typeof DashboardActionTypes.FETCH_PURCHASED_ITEMS;
};
