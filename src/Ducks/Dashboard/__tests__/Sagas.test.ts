import { fetchPurchasesAction } from '../Actions';
import { fetchPurchases } from '../Sagas';
import { DashboardActionTypes, PurchasesResponse, Purchase } from '../types';

import { AppStatusActionTypes } from '../../AppStatus/types';

import { recordSaga } from '../../../Helpers/SagasTests';
import Api from '../../../Services/Api';

jest.mock('../../../Services/Api');

describe('Test Dashboard sagas', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Test fetchPurchases saga - success', async () => {
    const puchasesList: Purchase[] = [
      {
        cashbackPercentage: 0.01,
        cashbackValue: 1,
        date: '2021-04-01T08:15:30-03:00',
        id: 123,
        price: 100,
        status: 'Approved'
      },
      {
        cashbackPercentage: 0.01,
        cashbackValue: 1,
        date: '2021-04-01T08:11:30-03:00',
        id: 123,
        price: 50,
        status: 'Validating'
      },
      {
        cashbackPercentage: 0.01,
        cashbackValue: 1,
        date: '2021-04-01T08:19:30-03:00',
        id: 123,
        price: 30,
        status: 'Rejected'
      }
    ];
    Api.get = jest.fn(async () => Promise.resolve<PurchasesResponse>({ purchases: puchasesList }));

    const dispatched: any = await recordSaga(fetchPurchases, fetchPurchasesAction(), {});

    expect(Api.get).toBeCalledWith('/purchases');
    expect(dispatched[0].payload).toBe(true);
    expect(dispatched[0].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[1].payload).toBe('Buscando compras cadastradas...');
    expect(dispatched[1].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(dispatched[2].payload).toStrictEqual(puchasesList);
    expect(dispatched[2].type).toBe(DashboardActionTypes.CHANGE_PURCHASES);
    expect(dispatched[3].payload).toBe(false);
    expect(dispatched[3].type).toBe(DashboardActionTypes.FETCH_PURCHASES_ERROR);
    expect(dispatched[4].payload).toBe(false);
    expect(dispatched[4].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[5].payload).toBe('');
    expect(dispatched[5].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(dispatched[6].payload).toBe(false);
    expect(dispatched[6].type).toBe(AppStatusActionTypes.CHANGE_REQUEST_FAILED);
  });

  it('Test fetchPurchases saga - error', async () => {
    const error = new Error('Error message');
    Api.get = jest.fn(async () => Promise.reject(error));

    const dispatched: any = await recordSaga(fetchPurchases, fetchPurchasesAction(), {});

    expect(Api.get).toBeCalledWith('/purchases');
    expect(dispatched[0].payload).toBe(true);
    expect(dispatched[0].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[1].payload).toBe('Buscando compras cadastradas...');
    expect(dispatched[1].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(dispatched[2].payload).toBe(true);
    expect(dispatched[2].type).toBe(DashboardActionTypes.FETCH_PURCHASES_ERROR);
    expect(dispatched[3].payload).toBe(false);
    expect(dispatched[3].type).toBe(AppStatusActionTypes.CHANGE_LOADING);
    expect(dispatched[4].payload).toBe('Erro ao buscar compras');
    expect(dispatched[4].type).toBe(AppStatusActionTypes.CHANGE_LOADING_MESSAGE);
    expect(dispatched[5].payload).toBe(true);
    expect(dispatched[5].type).toBe(AppStatusActionTypes.CHANGE_REQUEST_FAILED);
  });
});
