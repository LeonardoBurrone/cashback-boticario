import { all, put, takeLatest } from 'redux-saga/effects';

import { changePuchasesAction, fetchPurchasesErrorAction } from './Actions';
import { FetchPuschasesAction, DashboardActionTypes, Purchase } from './types';

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
  },
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
  },
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
  },
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

export function* fetchPurchases(action: FetchPuschasesAction) {
  try {
    yield put(changePuchasesAction(purchases));
  } catch (error) {
    // TODO
    yield put(fetchPurchasesErrorAction(true));
  }
}

export const dashboardSagas = all([takeLatest(DashboardActionTypes.FETCH_PURCHASES, fetchPurchases)]);
