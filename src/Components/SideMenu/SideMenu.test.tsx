import { IconButton, List } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import SideMenu, { Props } from './';
import Option from './Option';
import { CBDrawer } from './styles';

describe('Test component SideMenu', () => {
  const onCloseDrawerSpy = jest.fn(() => ({}));

  const props: Props = {
    isSideMenuOpened: false,
    onCloseDrawer: onCloseDrawerSpy
  };

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<SideMenu {...props} />);
  });

  it('Check if component rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Validate layout when drawer is closed', () => {
    const drawer = wrapper.find(CBDrawer).props();

    expect(drawer.className).toBe('drawerClose');
    expect(drawer.open).toBe(false);
    expect(wrapper.find(ChevronLeftIcon).exists()).toBeTruthy();
    expect(wrapper.find(List).prop('children')).toHaveLength(2);
    expect(wrapper.find(Option).at(0).props().isSideMenuOpened).toBe(false);
    expect(wrapper.find(Option).at(1).props().isSideMenuOpened).toBe(false);
  });

  it('Validate layout when drawer is opened', () => {
    wrapper.setProps({
      isSideMenuOpened: true
    });
    const drawer = wrapper.find(CBDrawer).props();

    expect(drawer.className).toBe('drawerOpen');
    expect(drawer.open).toBe(true);
    expect(wrapper.find(List).prop('children')).toHaveLength(2);
    expect(wrapper.find(Option).at(0).props().isSideMenuOpened).toBe(true);
    expect(wrapper.find(Option).at(1).props().isSideMenuOpened).toBe(true);
  });

  it('Check if onCloseDrawer is called when pressing the control button', () => {
    const button: any = wrapper.find(IconButton).props();
    button.onClick();

    expect(onCloseDrawerSpy).toBeCalled();
  });
});
