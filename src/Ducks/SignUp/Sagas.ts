import { all, call, put, takeLatest } from 'redux-saga/effects';

import { SignActionTypes, SignUpAction } from './types';

import { loginAction } from '../Login/Actions';

import Api from '../../Services/Api';

export function* signUp(action: SignUpAction) {
  try {
    const { email, password } = action.payload;

    yield call(() => Api.post('/sign-up', action.payload));
    yield put(loginAction({ email, password }));
  } catch (error: any) {
    // TODO: tratar erro
  }
}

// TODO: remover função mockada
export function* mockedSignUp(action: SignUpAction) {
  try {
    const { email, password } = action.payload;

    yield put(loginAction({ email, password }));
  } catch (error: any) {
    // TODO: tratar erro
  }
}

export const signUpSagas = all([takeLatest(SignActionTypes.SIGN_UP, mockedSignUp)]);
