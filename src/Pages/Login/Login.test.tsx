import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { useDispatch } from 'react-redux';

import Login from './';
import Information from './Information';

import Footer from '../../Components/Footer';
import { LoginActionTypes } from '../../Ducks/Login/types';

const mockDispatch = jest.fn();

jest.mock('react-redux');

describe('Test page Login', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    wrapper = shallow(<Login />);
  });

  it('Check if component rendered correctly', () => {
    expect(wrapper.find(Footer).props().buttonDisabled).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('Validate layout when some inputs were filled incorrectly', () => {
    const information = wrapper.find(Information).props();
    information.changeValue('email', 'test@test');

    expect(wrapper.find(Information).props().emailError).toBe('E-mail inválido');
  });

  it('Validate layout when all inputs were filled', () => {
    const information = wrapper.find(Information).props();
    information.changeValue('email', 'test@test.com');
    information.changeValue('password', '12345');

    const footer = wrapper.find(Footer).props();
    footer.onClick();

    expect(footer.buttonDisabled).toBe(false);
    expect(mockDispatch).toBeCalledWith({
      payload: {
        email: 'test@test.com',
        password: '12345'
      },
      type: LoginActionTypes.LOGIN
    });
  });
});
