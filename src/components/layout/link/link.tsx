import React, { FC } from 'react';
import { InferProps, string } from 'prop-types';
import NextLink from 'next/link';

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
  <NextLink
    href={slug != null ? `/projects/${slug}` : '/404'}
    passHref
    legacyBehavior
  >
    <LinkStyled>
      <Project>
        <ProjectMeta>
          <h3>{title}</h3>
        </ProjectMeta>
        <ProjectOverview>{overview}</ProjectOverview>
      </Project>
    </LinkStyled>
  </NextLink>
);

Link.propTypes = propTypes;

export { Link };
