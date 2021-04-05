import configureMockStore from 'redux-mock-store';
import { changeBalanceAction, changeBalanceErrorAction, fetchBalanceAction } from '../Actions';
import { initialState } from '../Reducer';

describe('Test Balance Actions', () => {
  const mockStore = configureMockStore();
  const store = mockStore(initialState);

  beforeEach(() => {
    store.clearActions();
  });

  it('Check if "changeBalanceAction" was dispatched', () => {
    store.dispatch(changeBalanceAction('50'));

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });

  it('Check if "changeBalanceErrorAction" was dispatched', () => {
    store.dispatch(changeBalanceErrorAction(true));

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });

  it('Check if "fetchBalanceAction" was dispatched', () => {
    store.dispatch(fetchBalanceAction());

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });
});
