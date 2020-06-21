import React, { FC } from 'react';
import { InferProps, string } from 'prop-types';

import { Intro as IntroStyled, Meta, Description } from './intro.styles';

const propTypes = {
  title: string.isRequired,
  role: string.isRequired,
  description: string.isRequired,
};
type Props = PartialNullable<InferProps<typeof propTypes>>;

const Intro: FC<Props> = ({ title, role, description }) => {
  return (
    <IntroStyled>
      <Meta>
        <h1>{title}</h1>
        <p>{role}</p>
      </Meta>
      <Description
        dangerouslySetInnerHTML={{
          __html: description || '',
        }}
      />
    </IntroStyled>
  );
};

Intro.propTypes = propTypes;

export { Intro };
