import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { InferProps, string } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { HeadQuery } from 'graphql-types';

const propTypes = {
  title: string,
};
type Props = InferProps<typeof propTypes>;

const Head: FC<Props> = ({ title }) => {
  const { site }: HeadQuery = useStaticQuery(graphql`
    query Head {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const renderTitle = (): string =>
    `${site?.siteMetadata?.title}${title ? ` – ${title}` : ''}`;

  return (
    <Helmet>
      <html lang="en-GB" />
      <title>{renderTitle()}</title>
    </Helmet>
  );
};

Head.propTypes = propTypes;

export { Head };
