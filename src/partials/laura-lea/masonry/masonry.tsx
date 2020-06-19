import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useComponent, useVisible } from 'shared';
import { Text, Code } from 'components';
import { CodeMasonryQuery } from 'graphql-types';
import { Container } from './masonry.styles';

const masonryComponent = import('@bit/rajansolanki.dev.masonry');

const Masonry: FC = () => {
  const codeMasonryData: CodeMasonryQuery = useStaticQuery(graphql`
    query CodeMasonry {
      markdownRemark(fileAbsolutePath: { glob: "**/laura-lea/masonry.md" }) {
        html
      }
    }
  `);

  const [visibleRef, isVisible] = useVisible();

  useComponent(masonryComponent, isVisible);

  return (
    <div>
      <Text heading="Masonry">
        <p ref={visibleRef}>The products page</p>
      </Text>

      <Code code={codeMasonryData.markdownRemark?.html} />

      <Container>
        <component-masonry />
      </Container>
    </div>
  );
};

export { Masonry };
