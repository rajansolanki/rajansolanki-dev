import React, { FC } from 'react';
import { InferProps, string } from 'prop-types';

import {
  Intro as IntroStyled,
  Project,
  ProjectMeta,
  ProjectDescription,
  ProjectLink,
} from './intro.styles';

const propTypes = {
  title: string.isRequired,
  role: string.isRequired,
  description: string.isRequired,
  url: string.isRequired,
};
type Props = PartialNullable<InferProps<typeof propTypes>>;

const Intro: FC<Props> = ({ title, role, description, url }) => {
  return (
    <IntroStyled>
      <Project>
        <ProjectMeta>
          <h1>{title}</h1>
          <p>{role}</p>
          <ProjectLink
            href={url || ''}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            VISIT SITE
          </ProjectLink>
        </ProjectMeta>
        <ProjectDescription
          dangerouslySetInnerHTML={{
            __html: description || '',
          }}
        />
      </Project>
    </IntroStyled>
  );
};

Intro.propTypes = propTypes;

export { Intro };
