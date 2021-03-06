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
  margin: 10vh 0;

  ${GRID.sm} {
    width: 30%;
  }
`;

export const ProjectLink = styled.a`
  display: inline-block;
  margin: 1em 0;
  padding: 0.5em 1em;
  font-size: 0.9em;
  background: var(--blue);
  color: var(--grey-light-text);
  border-radius: 0.2em;
  transform: color 0.3s ease;

  &:hover,
  &:active {
    color: var(--white-text);
  }
`;

export const ProjectDescription = styled.div`
  width: 100%;

  ${GRID.sm} {
    width: 60%;
  }
`;

const TagMargin = '0.5em';

export const ProjectTags = styled.div`
  margin: 8vh -${TagMargin};
  font-size: 0.8em;

  span {
    display: inline-block;
    margin: ${TagMargin};
    padding: 0.4em 0.6em;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 0.5em;
  }
`;
