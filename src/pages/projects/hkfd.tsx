import React, { FC } from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import { Intro } from 'components';
import { ProjectHkfdQuery } from 'graphql-types';

const HKFD: FC = () => {
  const { markdownRemark }: ProjectHkfdQuery = useStaticQuery(graphql`
    query ProjectHkfd {
      markdownRemark(fileAbsolutePath: { glob: "**/projects/hkfd.md" }) {
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

export default HKFD;
