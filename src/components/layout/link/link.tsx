import React, { FC } from 'react';
import { InferProps, string } from 'prop-types';

import { Timeline } from '../layout.styles';
import {
  Link as LinkStyled,
  Project,
  ProjectOverview,
  ProjectMeta,
} from './link.styles';

const propTypes = {
  slug: string.isRequired,
  title: string.isRequired,
  overview: string.isRequired,
};
type Props = PartialNullable<InferProps<typeof propTypes>>;

const Link: FC<Props> = ({ slug, title, overview }) => (
  <LinkStyled to={`/projects/${slug}` || ''}>
    <Timeline type="project" />
    <Project>
      <ProjectMeta>
        <h3>{title}</h3>
      </ProjectMeta>
      <ProjectOverview>{overview}</ProjectOverview>
    </Project>
  </LinkStyled>
);

Link.propTypes = propTypes;

export { Link };
