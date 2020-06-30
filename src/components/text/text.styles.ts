import styled from '@emotion/styled';

import { GRID, PADDING } from 'styles';

export const Text = styled.div`
  width: 100%;
  margin: 10vh 0;

  ol,
  ul {
    margin: 0 2em;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 ${PADDING.xs}px;

  ${GRID.md} {
    width: 80%;
  }
`;
