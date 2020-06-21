import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Intro } from 'components';
import { ProjectViqQuery } from 'graphql-types';

const VIQ: FC = () => {
  const { markdownRemark }: ProjectViqQuery = useStaticQuery(graphql`
    query ProjectViq {
      markdownRemark(fileAbsolutePath: { glob: "**/projects/viq.md" }) {
        frontmatter {
          title
          role
        }
        html
      }
    }
  `);

  return (
    <>
      <Intro
        title={markdownRemark?.frontmatter?.title}
        role={markdownRemark?.frontmatter?.role}
        description={markdownRemark?.html}
      />
    </>
  );
};

export default VIQ;
