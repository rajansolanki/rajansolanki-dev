import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';

import { GRID } from 'styles';

export const Link = styled(GatsbyLink)`
  display: flex;
  padding: 0;
  background: var(--grey-dark);
  color: var(--grey-medium-text);
  transition: background-color 150ms ease-out;

  h3 {
    color: var(--white-text);
  }

  &:hover,
  &:active {
    background: var(--black);

    h3 {
      text-decoration: underline;
    }
  }
`;

export const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 5vh 0;
`;

export const ProjectMeta = styled.div`
  width: 100%;

  ${GRID.sm} {
    width: 30%;
  }
`;

export const ProjectOverview = styled.div`
  width: 100%;

  ${GRID.sm} {
    width: 60%;
  }
`;
