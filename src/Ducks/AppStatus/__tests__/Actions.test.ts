import configureMockStore from 'redux-mock-store';
import {
  changeIsLoggedInAction,
  changeLoadingAction,
  changeLoadingMessageAction,
  changeRequestErrorAction
} from '../Actions';
import { initialState } from '../Reducer';

describe('Test AppStatus Actions', () => {
  const mockStore = configureMockStore();
  const store = mockStore(initialState);

  beforeEach(() => {
    store.clearActions();
  });

  it('Check if "changeIsLoggedInAction" was dispatched', () => {
    store.dispatch(changeIsLoggedInAction(true));

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });

  it('Check if "changeLoadingAction" was dispatched', () => {
    store.dispatch(changeLoadingAction(true));

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });

  it('Check if "changeLoadingMessageAction" was dispatched', () => {
    store.dispatch(changeLoadingMessageAction('Loading message...'));

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });

  it('Check if "changeRequestErrorAction" was dispatched', () => {
    store.dispatch(changeRequestErrorAction(true));

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });
});
