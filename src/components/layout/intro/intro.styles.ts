import styled from '@emotion/styled';

import { GRID, CONTAINER } from 'styles';

export const Intro = styled.div`
  background: var(--grey-dark);
`;

export const Project = styled.div`
  ${CONTAINER}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
  color: var(--grey-medium-text);

  h1 {
    margin: 0;
    color: var(--white-text);
  }
`;

export const ProjectMeta = styled.div`
  width: 100%;

  ${GRID.sm} {
    width: 30%;
  }
`;

export const ProjectDescription = styled.div`
  width: 100%;

  ${GRID.sm} {
    width: 60%;
  }
`;
