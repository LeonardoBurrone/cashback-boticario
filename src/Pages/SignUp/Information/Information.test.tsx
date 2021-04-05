import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Information, { Props } from './';

import { CBTextField } from '../../../Styles/Common';

describe('Test component Information', () => {
  const changeValueSpy = jest.fn(() => ({}));

  const props: Props = {
    changeValue: changeValueSpy,
    document: '',
    documentError: '',
    email: '',
    emailError: '',
    name: '',
    nameError: '',
    password: '',
    passwordError: ''
  };

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Information {...props} />);
  });

  it('Check if component rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Fill out inputs', () => {
    const documentEvent = {
      preventDefault() {},
      target: { value: '11122233345' }
    };
    const emailEvent = {
      preventDefault() {},
      target: { value: 'test@test.com' }
    };
    const nameEvent = {
      preventDefault() {},
      target: { value: 'Test Name' }
    };
    const passwordEvent = {
      preventDefault() {},
      target: { value: '123456' }
    };

    wrapper.find(CBTextField).at(0).simulate('change', nameEvent);
    wrapper.find(CBTextField).at(1).simulate('change', documentEvent);
    wrapper.find(CBTextField).at(2).simulate('change', emailEvent);
    wrapper.find(CBTextField).at(3).simulate('change', passwordEvent);

    expect(changeValueSpy).toBeCalledWith('name', 'Test Name');
    expect(changeValueSpy).toBeCalledWith('document', '11122233345');
    expect(changeValueSpy).toBeCalledWith('email', 'test@test.com');
    expect(changeValueSpy).toBeCalledWith('password', '123456');
  });
});
