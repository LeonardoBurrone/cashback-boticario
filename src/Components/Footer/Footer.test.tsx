import { Button } from '@material-ui/core';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Footer, { Props } from './';
import { CBLink } from './styles';

describe('Test component Footer', () => {
  const onClickSpy = jest.fn(() => ({}));

  const props: Props = {
    buttonDisabled: true,
    onClick: onClickSpy,
    primaryButtonText: 'Cadastre-se'
  };

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer {...props} />);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Check if component rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Call onClick when primary button is enabled', () => {
    wrapper.setProps({
      buttonDisabled: false
    });

    const primaryButton: any = wrapper.find(Button).props();
    primaryButton.onClick();

    expect(primaryButton.disabled).toBe(false);
    expect(onClickSpy).toBeCalled();
  });

  it('Check if link is set to the right route when there is a secondary button', () => {
    wrapper.setProps({
      secondaryButton: true,
      secondaryButtonText: 'Voltar'
    });

    const secondaryButton = wrapper.find(Button).at(0);

    expect(secondaryButton.exists()).toBeTruthy();
    expect(secondaryButton.prop('children')).toBe('Voltar');
    expect(wrapper.find(CBLink).props().to).toBe('/');

    wrapper.setProps({
      route: '/sign-up'
    });

    expect(wrapper.find(CBLink).props().to).toBe('/sign-up');
  });
});
