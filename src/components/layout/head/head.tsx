import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { HeadQuery } from 'graphql-types';

const Head: FC = () => {
  const { site }: HeadQuery = useStaticQuery(graphql`
    query Head {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Helmet>
      <html lang="en-GB" />
      <title>{site?.siteMetadata?.title}</title>
    </Helmet>
  );
};

export { Head };
