import configureMockStore from 'redux-mock-store';
import { registerPurchaseAction } from '../Actions';

describe('Test Register Actions', () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

  beforeEach(() => {
    store.clearActions();
  });

  it('Check if "registerPurchaseAction" was dispatched', () => {
    store.dispatch(
      registerPurchaseAction({
        code: '1234',
        date: '01/01/2021',
        price: '50'
      })
    );

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });
});
