import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { useDispatch } from 'react-redux';

import Register from './';
import Information from './Information';

import Footer from '../../Components/Footer';
import { RegisterActionTypes } from '../../Ducks/Register/types';

const mockDispatch = jest.fn();

jest.mock('react-redux');

describe('Test page Register', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    wrapper = shallow(<Register />);
  });

  it('Check if component rendered correctly', () => {
    expect(wrapper.find(Footer).props().buttonDisabled).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('Validate layout when all inputs were filled', () => {
    const information = wrapper.find(Information).props();
    information.changeValue('code', '12345');
    information.changeValue('date', '01/01/2021');
    information.changeValue('price', '50');

    const footer = wrapper.find(Footer).props();
    footer.onClick();

    expect(footer.buttonDisabled).toBe(false);
    expect(mockDispatch).toBeCalledWith({
      payload: {
        code: '12345',
        date: '01/01/2021',
        price: '50'
      },
      type: RegisterActionTypes.REGISTER_PURCHASE
    });
  });
});
