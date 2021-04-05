import configureMockStore from 'redux-mock-store';
import { changePuchasesAction, fetchPurchasesAction, fetchPurchasesErrorAction } from '../Actions';
import { initialState } from '../Reducer';

describe('Test Dashboard Actions', () => {
  const mockStore = configureMockStore();
  const store = mockStore(initialState);

  beforeEach(() => {
    store.clearActions();
  });

  it('Check if "changePuchasesAction" was dispatched', () => {
    store.dispatch(
      changePuchasesAction([
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
      ])
    );

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });

  it('Check if "fetchPurchasesAction" was dispatched', () => {
    store.dispatch(fetchPurchasesAction());

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });

  it('Check if "fetchPurchasesErrorAction" was dispatched', () => {
    store.dispatch(fetchPurchasesErrorAction(true));

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });
});
