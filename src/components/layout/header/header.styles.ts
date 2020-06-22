import styled from '@emotion/styled';

import { CONTAINER, GRID } from 'styles';

export const Header = styled.header`
  ${CONTAINER}
  display: flex;
  align-items: center;
  min-height: 70vh;

  h1,
  h2 {
    margin: 0;
    line-height: 120%;
  }

  h1 {
    font-size: 3em;
    color: var(--black-text);
  }
  h2 {
    font-size: 2.5em;
    color: var(--grey-dark-text);
  }

  ${GRID.md} {
    h1 {
      font-size: 3.75em;
    }
    h2 {
      font-size: 2.75em;
    }
  }

  ${GRID.xl} {
    h1 {
      font-size: 4em;
    }
    h2 {
      font-size: 3em;
    }
  }
`;
