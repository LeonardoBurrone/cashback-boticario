import { Typography } from '@material-ui/core';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dashboard from './';
import List from './List';
import { MockState } from './types';

import { BalanceActionTypes } from '../../Ducks/Balance/types';
import { DashboardActionTypes } from '../../Ducks/Dashboard/types';

const appStateMock: MockState = {
  balance: {
    balance: '50',
    balanceError: false
  },
  dashboard: {
    fetchPurchasesError: false,
    purchases: [
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
    ]
  }
};
const mockDispatch = jest.fn();

jest.mock('react-redux');

describe('Test page Dashboard', () => {
  let wrapper: ShallowWrapper;
  let useEffect: jest.SpyInstance;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f: () => void) => f());
  };

  const mockUseSelector = (newState?: MockState) => {
    (useSelector as jest.Mock).mockImplementation((callback: (state: MockState) => void) =>
      callback({ ...appStateMock, ...newState })
    );
  };

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    mockUseSelector();

    wrapper = shallow(<Dashboard />);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Check if component rendered correctly', () => {
    expect(wrapper.find(List).exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it('Fetch data when entering the page', () => {
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();

    wrapper = shallow(<Dashboard />);

    expect(mockDispatch).toBeCalledWith({
      type: BalanceActionTypes.FETCH_BALANCE
    });
    expect(mockDispatch).toBeCalledWith({
      type: DashboardActionTypes.FETCH_PURCHASES
    });
  });

  it('Validate layout when there was an error fetching the data', () => {
    mockUseSelector({
      balance: {
        balance: '',
        balanceError: true
      },
      dashboard: {
        fetchPurchasesError: true,
        purchases: []
      }
    });

    wrapper = shallow(<Dashboard />);

    expect(wrapper.find(Typography).at(0).prop('children')).toBe('Erro ao buscar o cashback acumulado');
    expect(wrapper.find(Typography).at(1).prop('children')).toBe('Erro ao buscar as compras cadastradas');
  });

  it('Validate layout when there is no data registered', () => {
    mockUseSelector({
      balance: {
        balance: '0',
        balanceError: false
      },
      dashboard: {
        fetchPurchasesError: false,
        purchases: []
      }
    });

    wrapper = shallow(<Dashboard />);

    expect(wrapper.find(Typography).at(0).prop('children')).toBe('Cashback acumulado');
    expect(wrapper.find(Typography).at(1).prop('children')).toBe('R$ 0');
    expect(wrapper.find(Typography).at(2).prop('children')).toBe('Nenhuma compra cadastrada');
  });
});
