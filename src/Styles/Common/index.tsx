import styled from 'styled-components';

const CBToolbar = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar
}));

export { CBToolbar };
