import styled from '@emotion/styled';

import { GRID } from 'styles';

export const Intro = styled.div`
  display: flex;
  min-height: 80vh;
  background: var(--grey-dark);

  h1 {
    margin: 0;
    color: var(--white-text);
  }
`;

export const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
