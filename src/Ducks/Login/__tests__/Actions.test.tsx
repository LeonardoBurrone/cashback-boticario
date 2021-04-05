import configureMockStore from 'redux-mock-store';
import { authenticateAction, loginAction, logoutAction } from '../Actions';

describe('Test Login Actions', () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

  beforeEach(() => {
    store.clearActions();
  });

  it('Check if "authenticateAction" was dispatched', () => {
    store.dispatch(authenticateAction());

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });

  it('Check if "loginAction" was dispatched', () => {
    store.dispatch(
      loginAction({
        email: 'test@test.com',
        password: '1234'
      })
    );

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });

  it('Check if "logoutAction" was dispatched', () => {
    store.dispatch(logoutAction());

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });
});
