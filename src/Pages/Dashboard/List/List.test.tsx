import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import List, { Props } from './';

describe('Test page List', () => {
  const props: Props = {
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
  };

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<List {...props} />);
  });

  it('Check if component rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
