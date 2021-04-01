import { all, takeLatest } from 'redux-saga/effects';

import { LoginAction, LoginActionTypes } from './types';

export function* login(action: LoginAction) {
  // TODO
}

export const loginSagas = all([takeLatest(LoginActionTypes.LOGIN, login)]);
