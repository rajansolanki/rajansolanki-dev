import React, { FC } from 'react';
import { InferProps, string } from 'prop-types';

import {
  Intro as IntroStyled,
  Project,
  ProjectMeta,
  ProjectDescription,
} from './intro.styles';
import { Timeline } from '../layout.styles';

const propTypes = {
  title: string.isRequired,
  role: string.isRequired,
  description: string.isRequired,
};
type Props = PartialNullable<InferProps<typeof propTypes>>;

const Intro: FC<Props> = ({ title, role, description }) => {
  return (
    <IntroStyled>
      <Timeline type="project" />
      <Project>
        <ProjectMeta>
          <h1>{title}</h1>
          <p>{role}</p>
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
