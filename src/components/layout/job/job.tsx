import React, { FC } from 'react';
import { InferProps, string, shape } from 'prop-types';

import { Job as JobStyled, JobMeta, JobDescription } from './job.styles';

export const formatDate = (date: string): number =>
  new Date(date).getFullYear();

const propTypes = {
  company: string.isRequired,
  date: shape({
    start: string.isRequired,
    end: string,
  }).isRequired,
  title: string.isRequired,
  description: string.isRequired,
};
type Props = PartialNullable<InferProps<typeof propTypes>>;

const Job: FC<Props> = ({ company, date, title, description }) => {
  const renderDate = `${date?.start != null ? formatDate(date.start) : ''} – ${
    date?.end != null ? formatDate(date.end) : 'Present'
  }`;

  return (
    <JobStyled>
      <JobMeta>
        <h2>{company}</h2>
        <p>
          {renderDate}
          <br />
          {title}
        </p>
      </JobMeta>
      <JobDescription
        dangerouslySetInnerHTML={{
          __html: description || '',
        }}
      />
    </JobStyled>
  );
};

Job.propTypes = propTypes;

export { Job };
