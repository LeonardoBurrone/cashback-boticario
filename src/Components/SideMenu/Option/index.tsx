/* eslint-disable react/no-children-prop */
import { Icon } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { Link, Route } from 'react-router-dom';

import { OptionIcon, OptionWrapper, OptionText, TextDiv } from './styles';

import { MenuOption } from '../types';

import { checkActivePath } from '../../../Services/BrowserHistory';

export type Props = {
  isSideMenuOpened: boolean;
  option: MenuOption;
};

export const Option: React.FunctionComponent<Props> = (props: Props) => {
  const theme = useTheme();

  return (
    <Route
      path={props.option.path}
      children={({ match }) => {
        const isActive = checkActivePath(match);

        return (
          <Link color="secondary" to={props.option.path} style={{ textDecoration: 'none' }}>
            <OptionWrapper button className={isActive ? 'is-active' : ''} theme={theme}>
              <OptionIcon className={isActive ? 'is-active' : ''} theme={theme}>
                <Icon>{props.option.icon}</Icon>
              </OptionIcon>
              {props.isSideMenuOpened && (
                <TextDiv>
                  <OptionText className={isActive ? 'is-active' : ''} theme={theme} variant="subtitle1">
                    {props.option.title}
                  </OptionText>
                  <OptionText className={isActive ? 'is-active' : ''} theme={theme} variant="caption">
                    {props.option.description}
                  </OptionText>
                </TextDiv>
              )}
            </OptionWrapper>
          </Link>
        );
      }}
    />
  );
};

export default Option;
