import { Container, Paper } from '@material-ui/core';
import styled from 'styled-components';

const CBContainer = styled(Container)`
  && {
    background: #aaa543;
    display: flex;
    flex-flow: column;
  }
`;

const CBContent = styled(Paper)`
  && {
    padding: 20px;
    &.center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Logo = styled('div')`
  && {
    align-items: center;
    display: flex;
    flex-flow: column;
  }
`;

const Title = styled('p')`
  && {
    align-items: flex-start;
    display: flex;
    flex-flow: column;
  }
`;

export { CBContainer, CBContent, Logo, Title };
