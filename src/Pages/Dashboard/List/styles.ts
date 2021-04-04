import { Container } from '@material-ui/core';
import styled from 'styled-components';

const CBContainer = styled(Container)`
  && {
    background: #aaa543;
    display: flex;
    flex-flow: column;
  }
`;

const Information = styled('div')`
  && {
    align-items: baseline;
    display: flex;
    justify-content: space-between;
  }
`;

export { CBContainer, Information };
