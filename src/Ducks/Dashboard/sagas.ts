import { all, put, takeLatest } from 'redux-saga/effects';

import { changePuchasesAction } from './Actions';
import { FetchPuschasedItemsAction, DashboardActionTypes, Purchase } from './types';

import CentralNavigationService from '../../Services/Navigation';

const purchases: Purchase[] = [
  {
    cashbackPercentage: 0.01,
    cashbackValue: 1,
    date: '2021-04-01T08:15:30-03:00',
    id: 123,
    price: 100,
    status: 'Approved'
  },
  {
    cashbackPercentage: 0.005,
    cashbackValue: 5,
    date: '2021-04-01T08:15:30-03:00',
    id: 124,
    price: 1000,
    status: 'Validating'
  },
  {
    cashbackPercentage: 0.01,
    cashbackValue: 1,
    date: '2021-04-01T08:15:30-03:00',
    id: 125,
    price: 100,
    status: 'Rejected'
  }
];

export function* fetchPurchasedItems(action: FetchPuschasedItemsAction) {
  yield put(changePuchasesAction(purchases));
}

export const dashboardSagas = all([takeLatest(DashboardActionTypes.FETCH_PURCHASED_ITEMS, fetchPurchasedItems)]);
