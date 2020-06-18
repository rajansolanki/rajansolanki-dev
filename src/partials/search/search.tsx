import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useComponent, useVisible } from 'shared';
import { Text, Code } from 'components';
import { CodeSearchQuery } from 'graphql-types';
import { Container } from './search.styles';

const searchComponent = import('@bit/rajansolanki.dev.search');

const Search: FC = () => {
  const codeSearchData: CodeSearchQuery = useStaticQuery(graphql`
    query CodeSearch {
      markdownRemark(fileAbsolutePath: { glob: "**/laura-lea/search.md" }) {
        html
      }
    }
  `);

  const [visibleRef, isVisible] = useVisible();
  useComponent(searchComponent, isVisible);

  return (
    <div>
      <Text heading="Search">
        <p ref={visibleRef}>The layout for the products page was</p>
      </Text>

      <Container>
        <component-search />
      </Container>

      <Code code={codeSearchData.markdownRemark?.html} />
    </div>
  );
};

export { Search };
