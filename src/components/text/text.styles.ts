import styled from '@emotion/styled';

import { GRID, PADDING } from 'styles';

export const Text = styled.div`
  width: 100%;
  padding: 20vh 0;

  ol,
  ul {
    margin: 0 2em;
  }

  li {
    margin: 5vh 0;
  }

  p {
    margin: 7.5vh 0;
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
