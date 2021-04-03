import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CBContainer = styled('div')`
  && {
    display: flex;
    flex-direction: column;
    margin: 30px -20px -20px -20px;
  }
`;

const CBGrid = styled('div')`
  && {
    display: flex;
    justify-content: flex-end;
    padding: 24px 24px;
  }
`;

const CBLink = styled(Link)`
  && {
    text-decoration: none;
  }
`;

export { CBContainer, CBGrid, CBLink };
