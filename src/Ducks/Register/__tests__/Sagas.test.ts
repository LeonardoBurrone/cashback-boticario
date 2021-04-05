import { registerPurchaseAction } from '../Actions';
import { registerPurchase } from '../Sagas';

import { AppStatusActionTypes } from '../../AppStatus/types';

import { recordSaga } from '../../../Helpers/SagasTests';
import Api from '../../../Services/Api';

jest.mock('../../../Services/Api');

describe('Test Register sagas', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Test registerPurchase saga - success', async () => {
    Api.post = jest.fn(async () => Promise.resolve({}));

    const dispatched: any = await recordSaga(
      registerPurchase,
      registerPurchaseAction({
        code: '1234',
        date: '01/01/2021',
        price: '50'
      }),
      {}
    );

    expect(dispatched[0].payload).toBe(true);
    expect(dispatched[0].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[1].payload).toBe('Cadastrando compra...');
    expect(dispatched[1].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(Api.post).toBeCalledWith('/register', { code: '1234', date: '01/01/2021', price: '50' });
    expect(dispatched[2].payload).toBe(false);
    expect(dispatched[2].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[3].payload).toBe('Compra cadastrada com sucesso');
    expect(dispatched[3].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(dispatched[4].payload).toBe(true);
    expect(dispatched[4].type).toBe(AppStatusActionTypes.CHANGE_REQUEST_FAILED);
  });

  it('Test registerPurchase saga - error', async () => {
    const error = new Error('Error message');
    Api.post = jest.fn(async () => Promise.reject(error));

    const dispatched: any = await recordSaga(
      registerPurchase,
      registerPurchaseAction({
        code: '1234',
        date: '01/01/2021',
        price: '50'
      }),
      {}
    );

    expect(dispatched[0].payload).toBe(true);
    expect(dispatched[0].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[1].payload).toBe('Cadastrando compra...');
    expect(dispatched[1].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(Api.post).toBeCalledWith('/register', { code: '1234', date: '01/01/2021', price: '50' });
    expect(dispatched[2].payload).toBe(false);
    expect(dispatched[2].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[3].payload).toBe('Erro ao cadastrar compra');
    expect(dispatched[3].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(dispatched[4].payload).toBe(true);
    expect(dispatched[4].type).toBe(AppStatusActionTypes.CHANGE_REQUEST_FAILED);
  });
});
