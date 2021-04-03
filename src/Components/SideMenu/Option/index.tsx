/* eslint-disable react/no-children-prop */
import Icon from '@material-ui/core/Icon';
import React from 'react';
import { Link, Route } from 'react-router-dom';

import { OptionIcon, OptionText, OptionWrapper } from './styles';

import { MenuOption } from '../types';

type Props = {
  isSideMenuOpened: boolean;
  option: MenuOption;
};

const Option: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Route
      path={props.option.path}
      children={({ match }) => {
        // const isActive = checkActivePath(match);
        const isActive = true;

        return (
          <Link to={props.option.path} style={{ textDecoration: 'none' }}>
            <OptionWrapper button className={isActive ? 'is-active' : ''}>
              <OptionIcon>
                <Icon>{props.option.icon}</Icon>
              </OptionIcon>
              {props.isSideMenuOpened && (
                <OptionText
                  classes={{
                    primary: 'text-primary',
                    secondary: 'text-secondary'
                  }}
                  primary={props.option.title}
                  secondary={props.option.description}
                />
              )}
            </OptionWrapper>
          </Link>
        );
      }}
    />
  );
};

export default Option;
