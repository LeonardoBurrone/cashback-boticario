import { all, call, put, takeLatest } from 'redux-saga/effects';

import { RegisterActionTypes, RegisterPurchaseAction } from './types';

import Api from '../../Services/Api';

export function* registerPurchase(action: RegisterPurchaseAction) {
  try {
    yield call(() => Api.post('/register', action.payload));
  } catch (error: any) {
    // TODO: tratar erro
  }
}

// TODO: remover função mockada
export function* mockedRegisterPurchase(action: RegisterPurchaseAction) {
  try {
    yield call(() => Api.post('/register', action.payload));
  } catch (error: any) {
    // TODO: tratar erro
  }
}

export const registerSagas = all([takeLatest(RegisterActionTypes.REGISTER_PURCHASE, mockedRegisterPurchase)]);
