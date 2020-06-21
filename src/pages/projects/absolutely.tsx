import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Intro } from 'components';
import { ProjectAbsolutelyQuery } from 'graphql-types';

const Absolutely: FC = () => {
  const { markdownRemark }: ProjectAbsolutelyQuery = useStaticQuery(graphql`
    query ProjectAbsolutely {
      markdownRemark(fileAbsolutePath: { glob: "**/projects/absolutely.md" }) {
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

export default Absolutely;
