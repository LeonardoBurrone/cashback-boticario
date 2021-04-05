import { all, call, put, takeLatest } from 'redux-saga/effects';

import { RegisterActionTypes, RegisterPurchaseAction } from './types';

import { changeLoadingAction, changeLoadingMessageAction, changeRequestErrorAction } from '../AppStatus/Actions';
import Api from '../../Services/Api';

export function* registerPurchase(action: RegisterPurchaseAction) {
  try {
    yield put(changeLoadingAction(true));
    yield put(changeLoadingMessageAction('Cadastrando compra...'));

    yield call(() => Api.post('/register', action.payload));

    yield put(changeLoadingAction(false));
    yield put(changeLoadingMessageAction('Compra cadastrada com sucesso'));
    yield put(changeRequestErrorAction(true));
  } catch (error: any) {
    yield put(changeLoadingAction(false));
    yield put(changeLoadingMessageAction('Erro ao cadastrar compra'));
    yield put(changeRequestErrorAction(true));
  }
}

export const registerSagas = all([takeLatest(RegisterActionTypes.REGISTER_PURCHASE, registerPurchase)]);
