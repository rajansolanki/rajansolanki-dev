import React, { FC, ReactNode } from 'react';
import { InferProps, string, node } from 'prop-types';

import { Job } from './job/job';
import { Intro } from './intro/intro';
import { Link } from './link/link';
import { Footer } from './footer/footer';
import { useDataQuery } from './layout.hooks';
import {
  getCurrentProject,
  getNextJob,
  getNextProject,
} from './layout.helpers';

const propTypes = {
  projectTitle: string,
  children: node.isRequired,
};
type Props = InferProps<typeof propTypes>;

const Layout: FC<Props> = ({ projectTitle, children }) => {
  const data = useDataQuery();

  const currentProject = getCurrentProject({
    projectTitle,
    data,
  });
  const nextJob = getNextJob({
    currentProject,
    data,
  });
  const nextProject = getNextProject({
    currentProject,
    nextJob,
    data,
  });

  const renderIntro = (): ReactNode | null =>
    currentProject && (
      <Intro
        title={currentProject?.node?.frontmatter?.title}
        role={currentProject?.node?.frontmatter?.role}
        description={currentProject?.node?.html}
      />
    );

  const renderNextJob = (): ReactNode | null => {
    if (currentProject?.next || !nextJob) return null;

    return (
      <Job
        company={nextJob?.frontmatter?.company}
        date={nextJob?.frontmatter?.date}
        title={nextJob?.frontmatter?.title}
        description={nextJob?.html}
      />
    );
  };
  const renderNext = (): ReactNode | null =>
    nextProject ? (
      <>
        {renderNextJob()}
        <Link
          slug={nextProject?.frontmatter?.slug}
          title={nextProject?.frontmatter?.title}
          overview={nextProject?.frontmatter?.overview}
        />
      </>
    ) : (
      <Footer />
    );

  return (
    <>
      {renderIntro()}
      <main>{children}</main>
      {renderNext()}
    </>
  );
};

Layout.propTypes = propTypes;

export { Layout };
