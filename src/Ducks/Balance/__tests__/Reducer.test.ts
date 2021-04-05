import { changeBalanceAction, changeBalanceErrorAction } from '../Actions';
import balanceReducer, { initialState } from '../Reducer';

describe('Test Balance Reducer', () => {
  it('Check the initial state', () => {
    expect(balanceReducer(initialState, {})).toMatchSnapshot();
  });

  it('Check reducer state after "changeBalanceAction" was dispatched', () => {
    expect(balanceReducer(initialState, changeBalanceAction('50'))).toMatchSnapshot();
  });

  it('Check reducer state after "changeBalanceErrorAction" was dispatched', () => {
    expect(balanceReducer(initialState, changeBalanceErrorAction(true))).toMatchSnapshot();
  });
});
