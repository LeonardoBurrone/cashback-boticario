import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';

const OptionWrapper = styled(ListItem)`
  && {
    max-width: 200px;
    height: 70px;
    padding: 2px 10px 2px 0px;
    position: relative;
  }

  &.is-active {
    max-width: 210px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

const OptionIcon = styled(ListItemIcon)`
  && {
    opacity: 0.7;
    min-width: 20px;
  }
`;

const OptionText = styled(ListItemText)`
  && {
    min-width: 130px;
    white-space: normal;
    & .text-primary {
      font-size: 14px;
    }
    & .text-secondary {
      opacity: 0.7;
      font-size: 12px;
    }
  }
`;

export { OptionIcon, OptionText, OptionWrapper };
