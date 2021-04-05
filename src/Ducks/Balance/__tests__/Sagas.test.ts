import { fetchBalanceAction } from '../Actions';
import { fetchBalance } from '../Sagas';
import { BalanceActionTypes, BalanceResponse } from '../types';

import { recordSaga } from '../../../Helpers/SagasTests';
import Api from '../../../Services/Api';

jest.mock('../../../Services/Api');

describe('Test Balance sagas', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Test fetchBalance saga - success', async () => {
    Api.get = jest.fn(async () => Promise.resolve<BalanceResponse>({ balance: '100' }));

    const dispatched: any = await recordSaga(fetchBalance, fetchBalanceAction(), {});

    expect(Api.get).toBeCalledWith('/balance');
    expect(dispatched[0].payload).toBe('100');
    expect(dispatched[0].type).toBe(BalanceActionTypes.CHANGE_BALANCE);
    expect(dispatched[1].payload).toBe(false);
    expect(dispatched[1].type).toBe(BalanceActionTypes.CHANGE_BALANCE_ERROR);
  });

  it('Test fetchBalance saga - error', async () => {
    const error = new Error('Error message');
    Api.get = jest.fn(async () => Promise.reject(error));

    const dispatched: any = await recordSaga(fetchBalance, fetchBalanceAction(), {});

    expect(Api.get).toBeCalledWith('/balance');
    expect(dispatched[0].payload).toBe('');
    expect(dispatched[0].type).toBe(BalanceActionTypes.CHANGE_BALANCE);
    expect(dispatched[1].payload).toBe(true);
    expect(dispatched[1].type).toBe(BalanceActionTypes.CHANGE_BALANCE_ERROR);
  });
});
