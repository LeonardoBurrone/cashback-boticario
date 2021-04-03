import { Container } from '@material-ui/core';
import styled from 'styled-components';

const CBContainer = styled(Container)`
  && {
    background: #aaa543;
    display: flex;
    flex-flow: column;
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

export { CBContainer, Logo, Title };
