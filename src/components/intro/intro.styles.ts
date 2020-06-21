import styled from '@emotion/styled';

import { GRID, CONTAINER } from 'styles';

export const Intro = styled.div`
  ${CONTAINER}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
  background: var(--grey-dark);

  h1 {
    margin: 0;
    color: var(--white-text);
  }
`;

export const Meta = styled.div`
  width: 100%;

  ${GRID.sm} {
    width: 30%;
  }
`;

export const Description = styled.div`
  width: 100%;

  ${GRID.sm} {
    width: 60%;
  }
`;
