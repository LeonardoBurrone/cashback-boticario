import { IconButton } from '@material-ui/core';
import { VisibilityOffOutlined, VisibilityOutlined } from '@material-ui/icons';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import ToggleVisibility, { Props } from './';

describe('Test component ToggleVisibility', () => {
  const toggleSpy = jest.fn(() => ({}));

  const props: Props = {
    show: false,
    toggle: toggleSpy
  };

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ToggleVisibility {...props} />);
  });

  it('Check if component rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Validate button icon when button is turned off', () => {
    expect(wrapper.find(VisibilityOffOutlined).exists()).toBe(true);
  });

  it('Validate button icon when button is turned on', () => {
    wrapper.setProps({
      show: true
    });
    expect(wrapper.find(VisibilityOutlined).exists()).toBe(true);
  });

  it('Check if toggle function is called when pression the button', () => {
    const button: any = wrapper.find(IconButton).props();
    button.onClick();

    expect(toggleSpy).toBeCalled();
  });
});
