import { Button, CircularProgress, Typography } from '@material-ui/core';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Load from './';
import { MockState } from './types';

import { AppStatusActionTypes } from '../../Ducks/AppStatus/types';

const appStateMock: MockState = {
  appStatus: {
    loading: false,
    loadingMessage: '',
    requestFailed: false
  }
};
const mockDispatch = jest.fn();

jest.mock('react-redux');

describe('Test page Load', () => {
  let wrapper: ShallowWrapper;

  const mockUseSelector = (newState?: MockState) => {
    (useSelector as jest.Mock).mockImplementation((callback: (state: MockState) => void) =>
      callback({ ...appStateMock, ...newState })
    );
  };

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    mockUseSelector();

    wrapper = shallow(<Load />);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Check if component rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Validate layout when there is a request being made', () => {
    mockUseSelector({
      appStatus: {
        loading: true,
        loadingMessage: 'Fetching data...',
        requestFailed: false
      }
    });

    wrapper = shallow(<Load />);

    expect(wrapper.find(Typography).at(0).prop('children')).toBe('Fetching data...');
    expect(wrapper.find(CircularProgress).exists()).toBeTruthy();
  });

  it('Validate layout when there was a failed request', () => {
    mockUseSelector({
      appStatus: {
        loading: false,
        loadingMessage: 'Error fetching data',
        requestFailed: true
      }
    });

    wrapper = shallow(<Load />);

    expect(wrapper.find(Typography).at(0).prop('children')).toBe('Error fetching data');
    expect(wrapper.find(CircularProgress).exists()).toBeFalsy();

    const button: any = wrapper.find(Button).props();
    button.onClick();

    expect(mockDispatch).toBeCalledWith({
      payload: false,
      type: AppStatusActionTypes.CHANGE_REQUEST_FAILED
    });
  });
});
