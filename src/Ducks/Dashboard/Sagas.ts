import { all, call, put, takeLatest } from 'redux-saga/effects';

import { changePuchasesAction, fetchPurchasesErrorAction } from './Actions';
import { FetchPuschasesAction, DashboardActionTypes, Purchase, PurchasesResponse } from './types';

import { changeLoadingAction, changeLoadingMessageAction, changeRequestErrorAction } from '../AppStatus/Actions';

import Api from '../../Services/Api';

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
    yield put(changeLoadingAction(true));
    yield put(changeLoadingMessageAction('Buscando compras...'));

    const result: PurchasesResponse = yield call(() => Api.get('/purchases'));

    yield put(changePuchasesAction(result.purchases));

    yield put(fetchPurchasesErrorAction(false));
    yield put(changeLoadingAction(false));
    yield put(changeLoadingMessageAction(''));
    yield put(changeRequestErrorAction(false));
  } catch (error) {
    yield put(fetchPurchasesErrorAction(true));
    yield put(changeLoadingAction(false));
    yield put(changeLoadingMessageAction('Erro ao buscar compras'));
    yield put(changeRequestErrorAction(true));
  }
}

export function* mockedFetchPurchases(action: FetchPuschasesAction) {
  try {
    yield put(changeLoadingAction(true));
    yield put(changeLoadingMessageAction('Buscando compras...'));

    yield put(changePuchasesAction(purchases));

    yield put(fetchPurchasesErrorAction(false));
    yield put(changeLoadingAction(false));
    yield put(changeLoadingMessageAction(''));
    yield put(changeRequestErrorAction(false));
  } catch (error) {
    yield put(fetchPurchasesErrorAction(true));
    yield put(changeLoadingAction(false));
    yield put(changeLoadingMessageAction('Erro ao buscar compras'));
    yield put(changeRequestErrorAction(true));
  }
}

export const dashboardSagas = all([takeLatest(DashboardActionTypes.FETCH_PURCHASES, mockedFetchPurchases)]);
