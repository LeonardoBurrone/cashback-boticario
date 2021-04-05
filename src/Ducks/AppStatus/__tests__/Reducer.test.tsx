import {
  changeIsLoggedInAction,
  changeLoadingAction,
  changeLoadingMessageAction,
  changeRequestErrorAction
} from '../Actions';
import appStatusReducer, { initialState } from '../Reducer';

describe('Test AppStatus Reducer', () => {
  it('Check the initial state', () => {
    expect(appStatusReducer(initialState, {})).toMatchSnapshot();
  });

  it('Check reducer state after "changeIsLoggedInAction" was dispatched', () => {
    expect(appStatusReducer(initialState, changeIsLoggedInAction(true))).toMatchSnapshot();
  });

  it('Check reducer state after "changeLoadingAction" was dispatched', () => {
    expect(appStatusReducer(initialState, changeLoadingAction(true))).toMatchSnapshot();
  });

  it('Check reducer state after "changeLoadingMessageAction" was dispatched', () => {
    expect(appStatusReducer(initialState, changeLoadingMessageAction('Loading message...'))).toMatchSnapshot();
  });

  it('Check reducer state after "changeRequestErrorAction" was dispatched', () => {
    expect(appStatusReducer(initialState, changeRequestErrorAction(true))).toMatchSnapshot();
  });
});
