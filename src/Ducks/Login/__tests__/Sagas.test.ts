import { authenticateAction, loginAction, logoutAction } from '../Actions';
import { authenticate, login, logout } from '../Sagas';
import { LoginActionTypes } from '../types';

import { AppStatusActionTypes } from '../../AppStatus/types';

import { recordSaga } from '../../../Helpers/SagasTests';
import Api from '../../../Services/Api';

const mockNavigation = {
  navigate: jest.fn()
};

jest.mock('../../../Services/Api');
jest.mock('../../../Services/Navigation', () => ({
  CentralNavigationService: () => mockNavigation
}));

describe('Test Login sagas', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Test authenticate saga', async () => {
    const dispatched: any = await recordSaga(authenticate, authenticateAction(), {});

    expect(dispatched[0].payload).toBe(true);
    expect(dispatched[0].type).toBe(AppStatusActionTypes.CHANGE_IS_LOGGED_IN);
    expect(dispatched[1].type).toBe(LoginActionTypes.AUTHENTICATION_SUCCESS);
  });

  it('Test logout saga', async () => {
    const dispatched: any = await recordSaga(logout, logoutAction(), {});

    expect(dispatched[0].payload).toBe(true);
    expect(dispatched[0].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[1].payload).toBe('Fazendo logout...');
    expect(mockNavigation.navigate).toBeCalledWith('login');
    expect(dispatched[2].payload).toBe(false);
    expect(dispatched[2].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[3].payload).toBe('');
    expect(dispatched[3].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
  });

  /*
  it('Test login saga - success', async () => {
    Api.post = jest.fn(async () => Promise.resolve({}));

    const dispatched: any = await recordSaga(
      login,
      loginAction({
        email: 'test@test.com',
        password: '123456'
      }),
      {},
      LoginActionTypes.AUTHENTICATION_SUCCESS
    );

    expect(dispatched[0].payload).toBe(true);
    expect(dispatched[0].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[1].payload).toBe('Fazendo login...');
    expect(dispatched[1].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(Api.post).toBeCalledWith('/login', { email: 'test@test.com', password: '123456' });
    expect(dispatched[2].type).toBe(LoginActionTypes.AUTHENTICATE);
    expect(dispatched[3].payload).toBe(false);
    expect(dispatched[3].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[4].payload).toBe('');
    expect(dispatched[4].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(dispatched[5].payload).toBe(false);
    expect(dispatched[5].type).toBe(AppStatusActionTypes.CHANGE_REQUEST_FAILED);
    expect(mockNavigation.navigate).toBeCalledWith('dashboard');
  });

  it('Test login saga - error authenticating', async () => {
    Api.post = jest.fn(async () => Promise.resolve({}));

    const dispatched: any = await recordSaga(
      login,
      loginAction({
        email: 'test@test.com',
        password: '123456'
      }),
      {},
      LoginActionTypes.AUTHENTICATION_ERROR
    );

    expect(dispatched[0].payload).toBe(true);
    expect(dispatched[0].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[1].payload).toBe('Fazendo login...');
    expect(dispatched[1].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(Api.post).toBeCalledWith('/login', { email: 'test@test.com', password: '123456' });
    expect(dispatched[2].type).toBe(LoginActionTypes.AUTHENTICATE);
    expect(dispatched[3].payload).toBe(false);
    expect(dispatched[3].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[4].payload).toBe('Erro ao fazer o login');
    expect(dispatched[4].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(dispatched[5].payload).toBe(true);
    expect(dispatched[5].type).toBe(AppStatusActionTypes.CHANGE_REQUEST_FAILED);
  });

  it('Test login saga - api error', async () => {
    const error = new Error('Error message');
    Api.post = jest.fn(async () => Promise.reject(error));

    const dispatched: any = await recordSaga(
      login,
      loginAction({
        email: 'test@test.com',
        password: '123456'
      }),
      {},
      LoginActionTypes.AUTHENTICATION_SUCCESS
    );

    expect(dispatched[0].payload).toBe(true);
    expect(dispatched[0].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[1].payload).toBe('Fazendo login...');
    expect(dispatched[1].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(Api.post).toBeCalledWith('/login', { email: 'test@test.com', password: '123456' });
    expect(dispatched[2].payload).toBe(false);
    expect(dispatched[2].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[3].payload).toBe('Erro ao fazer o login');
    expect(dispatched[3].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(dispatched[4].payload).toBe(true);
    expect(dispatched[4].type).toBe(AppStatusActionTypes.CHANGE_REQUEST_FAILED);
  });
  */
});
