import { all, call, takeLatest } from 'redux-saga/effects';

import { LoginAction, LoginActionTypes, LoginStackParamList } from './types';

import CentralNavigationService from '../../Services/Navigation';
import Api from '../../Services/Api';

export function* login(action: LoginAction) {
  try {
    const { email, password } = action.payload;
    const centralNavigationService = CentralNavigationService<LoginStackParamList>();

    yield call(() => Api.post('/login', { email, password }));
    centralNavigationService.navigate('dashboard');
  } catch (error: any) {
    // TODO: tratar erro
  }
}

// TODO: remover função mockada
export function* mockedLogin(action: LoginAction) {
  try {
    const { email, password } = action.payload;
    const centralNavigationService = CentralNavigationService<LoginStackParamList>();

    yield call(() => Api.post('/login', { email, password }));
    centralNavigationService.navigate('dashboard');
  } catch (error: any) {
    // TODO: tratar erro
  }
}

export const loginSagas = all([takeLatest(LoginActionTypes.LOGIN, mockedLogin)]);
