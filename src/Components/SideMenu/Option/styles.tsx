import { ListItem, ListItemIcon, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

type Props = {
  theme: Theme;
};

const OptionWrapper = styled(ListItem)`
  && {
    max-width: 200px;
    padding: 10px;
    position: relative;
  }

  &.is-active {
    background-color: ${(props: Props) => props.theme.palette.secondary.main};
    max-width: 210px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

const OptionIcon = styled(ListItemIcon)`
  && {
    color: ${(props: Props) => props.theme.palette.primary.contrastText};
    opacity: 0.7;
    min-width: 20px;
    margin: 10px 10px 10px 0px;

    &.is-active {
      color: ${(props: Props) => props.theme.palette.secondary.contrastText};
    }
  }
`;

const TextDiv = styled('div')`
  && {
    display: flex;
    flex-direction: column;
  }
`;

const OptionText = styled(Typography)`
  && {
    color: ${(props: Props) => props.theme.palette.primary.contrastText};

    &.is-active {
      color: ${(props: Props) => props.theme.palette.secondary.contrastText};
    }
  }
`;

export { OptionIcon, OptionWrapper, OptionText, TextDiv };
