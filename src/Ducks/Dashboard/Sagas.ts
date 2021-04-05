import { all, call, put, takeLatest } from 'redux-saga/effects';

import { changePuchasesAction, fetchPurchasesErrorAction } from './Actions';
import { FetchPuschasesAction, DashboardActionTypes, PurchasesResponse } from './types';

import { changeLoadingAction, changeLoadingMessageAction, changeRequestErrorAction } from '../AppStatus/Actions';

import Api from '../../Services/Api';

export function* fetchPurchases(action: FetchPuschasesAction) {
  try {
    yield put(changeLoadingAction(true));
    yield put(changeLoadingMessageAction('Buscando compras cadastradas...'));

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

export const dashboardSagas = all([takeLatest(DashboardActionTypes.FETCH_PURCHASES, fetchPurchases)]);
