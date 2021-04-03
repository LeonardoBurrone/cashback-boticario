import { all, call, put, race, take, takeLatest } from 'redux-saga/effects';

import { authenticateAction } from './Actions';
import { AuthenticateAction, LoginAction, LoginActionTypes, LoginStackParamList, RaceReturnType } from './types';

import { changeIsLoggedInAction } from '../AppStatus/Actions';

import CentralNavigationService from '../../Services/Navigation';
import Api from '../../Services/Api';

export function* authenticate(action: AuthenticateAction) {
  try {
    yield put(changeIsLoggedInAction(true));
    yield put({ type: LoginActionTypes.AUTHENTICATION_SUCCESS });
  } catch (error: any) {
    yield put({ type: LoginActionTypes.AUTHENTICATION_ERROR });
  }
}

export function* login(action: LoginAction) {
  try {
    const { email, password } = action.payload;
    const centralNavigationService = CentralNavigationService<LoginStackParamList>();

    yield call(() => Api.post('/login', { email, password }));

    yield put(authenticateAction());
    const [authenticationError, authenticationSuccess]: RaceReturnType = yield race([
      take(LoginActionTypes.AUTHENTICATION_ERROR),
      take(LoginActionTypes.AUTHENTICATION_SUCCESS)
    ]);

    if (authenticationSuccess) {
      centralNavigationService.navigate('dashboard');
    } else {
      // TODO: tratar erro
    }
  } catch (error: any) {
    // TODO: tratar erro
  }
}

// TODO: remover função mockada
export function* mockedLogin(action: LoginAction) {
  const { email, password } = action.payload;
  const centralNavigationService = CentralNavigationService<LoginStackParamList>();

  yield put(authenticateAction());
  const [authenticationError, authenticationSuccess]: RaceReturnType = yield race([
    take(LoginActionTypes.AUTHENTICATION_ERROR),
    take(LoginActionTypes.AUTHENTICATION_SUCCESS)
  ]);

  if (authenticationSuccess) {
    centralNavigationService.navigate('dashboard');
  } else {
    // TODO: tratar erro
  }
}

export const loginSagas = all([
  takeLatest(LoginActionTypes.AUTHENTICATE, authenticate),
  takeLatest(LoginActionTypes.LOGIN, mockedLogin)
]);
