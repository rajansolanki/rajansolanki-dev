import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Error, Masonry, Hover, Cart, Search, Slide } from 'partials';
import { Intro } from 'components';
import { ProjectLauraLeaQuery } from 'graphql-types';

const LauraLea: FC = () => {
  const { markdownRemark }: ProjectLauraLeaQuery = useStaticQuery(graphql`
    query ProjectLauraLea {
      markdownRemark(fileAbsolutePath: { glob: "**/projects/laura-lea.md" }) {
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
      <Masonry />
      <Search />
      <Error />
      <Hover />
      <Cart />
      <Slide />
    </>
  );
};

export default LauraLea;
