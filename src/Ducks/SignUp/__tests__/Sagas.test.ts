import { signUpAction } from '../Actions';
import { signUp } from '../Sagas';

import { AppStatusActionTypes } from '../../AppStatus/types';
import { LoginActionTypes } from '../../Login/types';

import { recordSaga } from '../../../Helpers/SagasTests';
import Api from '../../../Services/Api';

jest.mock('../../../Services/Api');

describe('Test SignUp sagas', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Test signUp saga - success', async () => {
    Api.post = jest.fn(async () => Promise.resolve({}));

    const dispatched: any = await recordSaga(
      signUp,
      signUpAction({
        document: '12311122234',
        email: 'test@test.com',
        name: 'Test Name',
        password: '123456'
      }),
      {}
    );

    expect(dispatched[0].payload).toBe(true);
    expect(dispatched[0].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[1].payload).toBe('Cadastrando conta...');
    expect(dispatched[1].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(Api.post).toBeCalledWith('/sign-up', {
      document: '12311122234',
      email: 'test@test.com',
      name: 'Test Name',
      password: '123456'
    });
    expect(dispatched[2].payload).toStrictEqual({
      email: 'test@test.com',
      password: '123456'
    });
    expect(dispatched[2].type).toBe(LoginActionTypes.LOGIN);
    expect(dispatched[3].payload).toBe(false);
    expect(dispatched[3].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[4].payload).toBe('');
    expect(dispatched[4].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(dispatched[5].payload).toBe(false);
    expect(dispatched[5].type).toBe(AppStatusActionTypes.CHANGE_REQUEST_FAILED);
  });

  it('Test signUp saga - error', async () => {
    const error = new Error('Error message');
    Api.post = jest.fn(async () => Promise.reject(error));

    const dispatched: any = await recordSaga(
      signUp,
      signUpAction({
        document: '12311122234',
        email: 'test@test.com',
        name: 'Test Name',
        password: '123456'
      }),
      {}
    );

    expect(dispatched[0].payload).toBe(true);
    expect(dispatched[0].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[1].payload).toBe('Cadastrando conta...');
    expect(dispatched[1].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(Api.post).toBeCalledWith('/sign-up', {
      document: '12311122234',
      email: 'test@test.com',
      name: 'Test Name',
      password: '123456'
    });
    expect(dispatched[2].payload).toBe(false);
    expect(dispatched[2].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[3].payload).toBe('Erro ao cadastrar conta');
    expect(dispatched[3].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(dispatched[4].payload).toBe(true);
    expect(dispatched[4].type).toBe(AppStatusActionTypes.CHANGE_REQUEST_FAILED);
  });
});
