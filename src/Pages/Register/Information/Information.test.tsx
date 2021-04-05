import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Information, { Props } from './';

import { CBTextField } from '../../../Styles/Common';

describe('Test component Information', () => {
  const changeValueSpy = jest.fn(() => ({}));

  const props: Props = {
    changeValue: changeValueSpy,
    code: '',
    codeError: '',
    date: '',
    dateError: '',
    price: '',
    priceError: ''
  };

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Information {...props} />);
  });

  it('Check if component rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Fill out inputs', () => {
    const codeEvent = {
      preventDefault() {},
      target: { value: '12345' }
    };
    const priceEvent = {
      preventDefault() {},
      target: { value: '10' }
    };

    wrapper.find(CBTextField).at(0).simulate('change', codeEvent);
    wrapper.find(CBTextField).at(1).simulate('change', priceEvent);

    expect(changeValueSpy).toBeCalledWith('code', '12345');
    expect(changeValueSpy).toBeCalledWith('price', '10');
  });
});
