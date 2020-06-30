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

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta name="theme-color" content="#ffffff" />

      <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@400&family=Roboto+Mono:wght@400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

Head.propTypes = propTypes;

export { Head };
