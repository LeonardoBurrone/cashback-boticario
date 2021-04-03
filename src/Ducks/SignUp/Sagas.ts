import { all, call, put, takeLatest } from 'redux-saga/effects';

import { SignActionTypes, SignUpAction } from './types';

import { changeLoadingAction, changeLoadingMessageAction, changeRequestErrorAction } from '../AppStatus/Actions';
import { loginAction } from '../Login/Actions';

import Api from '../../Services/Api';

export function* signUp(action: SignUpAction) {
  try {
    yield put(changeLoadingAction(true));
    yield put(changeLoadingMessageAction('Cadastrando conta...'));

    const { email, password } = action.payload;

    yield call(() => Api.post('/sign-up', action.payload));

    yield put(loginAction({ email, password }));
    yield put(changeLoadingAction(false));
    yield put(changeLoadingMessageAction(''));
    yield put(changeRequestErrorAction(false));
  } catch (error: any) {
    yield put(changeLoadingAction(false));
    yield put(changeLoadingMessageAction('Erro ao cadastrar conta'));
    yield put(changeRequestErrorAction(true));
  }
}

// TODO: remover função mockada
export function* mockedSignUp(action: SignUpAction) {
  try {
    yield put(changeLoadingAction(true));
    yield put(changeLoadingMessageAction('Cadastrando conta...'));

    const { email, password } = action.payload;

    yield put(loginAction({ email, password }));
    yield put(changeLoadingAction(false));
    yield put(changeLoadingMessageAction(''));
    yield put(changeRequestErrorAction(false));
  } catch (error: any) {
    yield put(changeLoadingAction(false));
    yield put(changeLoadingMessageAction('Erro ao cadastrar conta'));
    yield put(changeRequestErrorAction(true));
  }
}

export const signUpSagas = all([takeLatest(SignActionTypes.SIGN_UP, mockedSignUp)]);
