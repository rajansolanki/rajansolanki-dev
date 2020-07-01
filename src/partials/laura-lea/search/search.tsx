import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useComponent, useVisible } from 'shared';
import { Text, Code } from 'components';
import { CodeSearchQuery } from 'graphql-types';
import { Container } from './search.styles';

const searchComponent = import('@bit/rajansolanki.dev.search');

const Search: FC = () => {
  const { search }: CodeSearchQuery = useStaticQuery(graphql`
    query CodeSearch {
      search: markdownRemark(
        fileAbsolutePath: { glob: "**/laura-lea/search.md" }
      ) {
        html
      }
    }
  `);

  const [visibleRef, isVisible] = useVisible();
  useComponent(searchComponent, isVisible);

  return (
    <div>
      <Text heading="Search">
        <p ref={visibleRef}>
          To avoid the site becoming solely focused on purchasing, we opted to
          not provide any filtering or sorting options. Instead, a search with
          autocomplete was added, which provides most of the functionality of a
          filter without compromising the gallery.
        </p>
      </Text>

      <Container>
        <component-search />
      </Container>

      <Text>
        <p>
          The tags are fetched from the Shopify API, and handed to{' '}
          <code>fuse.js</code> to provide the autocompletion logic.
        </p>
      </Text>
      <Code code={search?.html} />
    </div>
  );
};

export { Search };
