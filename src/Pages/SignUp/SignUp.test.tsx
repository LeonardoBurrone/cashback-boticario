import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { useDispatch } from 'react-redux';

import SignUp from './';
import Information from './Information';

import Footer from '../../Components/Footer';
import { SignActionTypes } from '../../Ducks/SignUp/types';

const mockDispatch = jest.fn();

jest.mock('react-redux');

describe('Test page SignUp', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    wrapper = shallow(<SignUp />);
  });

  it('Check if component rendered correctly', () => {
    expect(wrapper.find(Footer).props().buttonDisabled).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('Validate layout when some inputs were filled incorrectly', () => {
    const information = wrapper.find(Information).props();
    information.changeValue('document', '111222');
    information.changeValue('email', 'test@test');
    information.changeValue('name', 'Test');

    expect(wrapper.find(Information).props().documentError).toBe('CPF inválido');
    expect(wrapper.find(Information).props().emailError).toBe('E-mail inválido');
    expect(wrapper.find(Information).props().nameError).toBe('Nome inválido');
  });

  it('Validate layout when all inputs were filled', () => {
    const information = wrapper.find(Information).props();
    information.changeValue('document', '42977191852');
    information.changeValue('email', 'test@test.com');
    information.changeValue('name', 'Test Name');
    information.changeValue('password', '123456');

    const footer = wrapper.find(Footer).props();
    footer.onClick();

    expect(footer.buttonDisabled).toBe(false);
    expect(mockDispatch).toBeCalledWith({
      payload: {
        document: '429.771.918-52',
        email: 'test@test.com',
        name: 'Test Name',
        password: '123456'
      },
      type: SignActionTypes.SIGN_UP
    });
  });
});
