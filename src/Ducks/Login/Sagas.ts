import { all, call, put, race, take, takeLatest } from 'redux-saga/effects';

import { authenticateAction } from './Actions';
import { AuthenticateAction, LoginAction, LoginActionTypes, LoginStackParamList, RaceReturnType } from './types';

import {
  changeIsLoggedInAction,
  changeLoadingAction,
  changeLoadingMessageAction,
  changeRequestErrorAction
} from '../AppStatus/Actions';
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
    yield put(changeLoadingAction(true));
    yield put(changeLoadingMessageAction('Fazendo login...'));

    const { email, password } = action.payload;
    const centralNavigationService = CentralNavigationService<LoginStackParamList>();

    yield call(() => Api.post('/login', { email, password }));

    yield put(authenticateAction());
    const [authenticationError, authenticationSuccess]: RaceReturnType = yield race([
      take(LoginActionTypes.AUTHENTICATION_ERROR),
      take(LoginActionTypes.AUTHENTICATION_SUCCESS)
    ]);

    if (authenticationSuccess) {
      yield put(changeLoadingAction(false));
      yield put(changeLoadingMessageAction(''));
      yield put(changeRequestErrorAction(false));
      centralNavigationService.navigate('dashboard');
    } else {
      throw new Error('Erro ao fazer o login');
    }
  } catch (error: any) {
    yield put(changeLoadingAction(false));
    yield put(changeLoadingMessageAction('Erro ao fazer o login'));
    yield put(changeRequestErrorAction(true));
  }
}

export function* logout(action: AuthenticateAction) {
  yield put(changeLoadingAction(true));
  yield put(changeLoadingMessageAction('Fazendo logout...'));

  const centralNavigationService = CentralNavigationService<LoginStackParamList>();
  centralNavigationService.navigate('login');

  yield put(changeLoadingAction(false));
  yield put(changeLoadingMessageAction(''));
}

export const loginSagas = all([
  takeLatest(LoginActionTypes.AUTHENTICATE, authenticate),
  takeLatest(LoginActionTypes.LOGIN, login),
  takeLatest(LoginActionTypes.LOGOUT, logout)
]);
