import { all, call, put, takeLatest } from 'redux-saga/effects';

import { changeBalanceAction, changeBalanceErrorAction } from './Actions';
import { BalanceActionTypes, BalanceResponse, FetchBalanceAction } from './types';

import Api from '../../Services/Api';

export function* fetchBalance(action: FetchBalanceAction) {
  try {
    const result: BalanceResponse = yield call(() => Api.get('/balance'));

    if (result) {
      yield put(changeBalanceAction(result.balance));
      yield put(changeBalanceErrorAction(false));
    } else {
      yield put(changeBalanceAction(''));
      yield put(changeBalanceErrorAction(true));
    }
  } catch (error: any) {
    yield put(changeBalanceAction(''));
    yield put(changeBalanceErrorAction(true));
  }
}

export const balanceSagas = all([takeLatest(BalanceActionTypes.FETCH_BALANCE, fetchBalance)]);
