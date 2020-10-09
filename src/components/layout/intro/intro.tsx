import React, { FC, ReactNode } from 'react';
import { InferProps, string, arrayOf } from 'prop-types';

import {
  Intro as IntroStyled,
  Project,
  ProjectMeta,
  ProjectDescription,
  ProjectLink,
  ProjectTags,
} from './intro.styles';

const propTypes = {
  title: string.isRequired,
  role: string.isRequired,
  description: string.isRequired,
  url: string.isRequired,
  tags: arrayOf(string).isRequired,
};
type Props = PartialNullable<InferProps<typeof propTypes>>;

const Intro: FC<Props> = ({ title, role, description, url, tags }) => {
  const renderTags = (): ReactNode | null =>
    // eslint-disable-next-line react/no-array-index-key
    tags && tags.map((tag, i) => <span key={i}>{tag}</span>);

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
        <ProjectDescription>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: description || '',
            }}
          />
          <ProjectTags>{renderTags()}</ProjectTags>
        </ProjectDescription>
      </Project>
    </IntroStyled>
  );
};

Intro.propTypes = propTypes;

export { Intro };
