import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Route } from 'react-router-dom';

import Option, { Props } from './';
import { OptionIcon, OptionWrapper, OptionText } from './styles';

jest.mock('../../../Services/BrowserHistory', () => ({
  checkActivePath: jest.fn().mockReturnValueOnce(false).mockReturnValue(true)
}));

describe('Test component Option', () => {
  const props: Props = {
    isSideMenuOpened: true,
    option: {
      description: 'Veja a listagem de suas compras cadastradas',
      icon: 'assessment',
      path: '/dashboard',
      title: 'Dashboard'
    }
  };

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Option {...props} />);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Check if component rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Validate layout when option is not active', () => {
    const routeProps: any = wrapper.find(Route).props();
    const LinkComponent = () => routeProps.children({ match: '' });
    const linkWrapper = shallow(<LinkComponent />);

    expect(linkWrapper.find(OptionWrapper).props().className).toBe('');
    expect(linkWrapper.find(OptionIcon).props().className).toBe('');
    expect(linkWrapper.find(OptionText).at(0).props().className).toBe('');
    expect(linkWrapper.find(OptionText).at(1).props().className).toBe('');
  });

  it('Validate layout when option is active', () => {
    const routeProps: any = wrapper.find(Route).props();
    const LinkComponent = () => routeProps.children({ match: '' });
    const linkWrapper = shallow(<LinkComponent />);

    expect(linkWrapper.find(OptionWrapper).props().className).toBe('is-active');
    expect(linkWrapper.find(OptionIcon).props().className).toBe('is-active');
    expect(linkWrapper.find(OptionText).at(0).props().className).toBe('is-active');
    expect(linkWrapper.find(OptionText).at(1).props().className).toBe('is-active');
  });
});
