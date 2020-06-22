import React, { FC } from 'react';
import { InferProps, string, shape } from 'prop-types';

import { Timeline } from '../layout.styles';
import { Job as JobStyled, JobMeta, JobDescription } from './job.styles';

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
  const renderDate = (): string => `${date?.start} – ${date?.end || 'Present'}`;

  return (
    <JobStyled>
      <Timeline type="job" />
      <div>
        <JobMeta>
          <h2>{company}</h2>
          <p>
            {renderDate()}
            <br />
            {title}
          </p>
        </JobMeta>
        <JobDescription
          dangerouslySetInnerHTML={{
            __html: description || '',
          }}
        />
      </div>
    </JobStyled>
  );
};

Job.propTypes = propTypes;

export { Job };
