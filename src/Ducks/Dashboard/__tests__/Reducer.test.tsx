import { changePuchasesAction, fetchPurchasesErrorAction } from '../Actions';
import dashboardReducer, { initialState } from '../Reducer';

describe('Test Dashboard Reducer', () => {
  it('Check the initial state', () => {
    expect(dashboardReducer(initialState, {})).toMatchSnapshot();
  });

  it('Check reducer state after "changePuchasesAction" was dispatched', () => {
    expect(
      dashboardReducer(
        initialState,
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
      )
    ).toMatchSnapshot();
  });

  it('Check reducer state after "fetchPurchasesErrorAction" was dispatched', () => {
    expect(dashboardReducer(initialState, fetchPurchasesErrorAction(true))).toMatchSnapshot();
  });
});
