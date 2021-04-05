export enum DashboardActionTypes {
  CHANGE_PURCHASES = 'CHANGE_PURCHASES',
  FETCH_PURCHASES = 'FETCH_PURCHASES',
  FETCH_PURCHASES_ERROR = 'FETCH_PURCHASES_ERROR'
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
  fetchPurchasesError: boolean;
  purchases: Purchase[];
};

export type ChangePuchasesAction = {
  payload: Purchase[];
  type: typeof DashboardActionTypes.CHANGE_PURCHASES;
};

export type FetchPuschasesAction = {
  type: typeof DashboardActionTypes.FETCH_PURCHASES;
};

export type FetchPuschasesErrorAction = {
  payload: boolean;
  type: typeof DashboardActionTypes.FETCH_PURCHASES_ERROR;
};

export type PurchasesResponse = {
  purchases: Purchase[];
};
