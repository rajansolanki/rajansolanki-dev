import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useComponent, useVisible } from 'shared';
import { Text, Code } from 'components';
import { CodeMasonryQuery } from 'graphql-types';
import { Container } from './masonry.styles';

const masonryComponent = import('@bit/rajansolanki.dev.masonry');

const Masonry: FC = () => {
  const { masonrySet, masonryCache }: CodeMasonryQuery = useStaticQuery(graphql`
    query CodeMasonry {
      masonrySet: markdownRemark(
        fileAbsolutePath: { glob: "**/laura-lea/masonry-set.md" }
      ) {
        html
      }
      masonryCache: markdownRemark(
        fileAbsolutePath: { glob: "**/laura-lea/masonry-cache.md" }
      ) {
        html
      }
    }
  `);

  const [visibleRef, isVisible] = useVisible();

  useComponent(masonryComponent, isVisible);

  return (
    <div>
      <Text heading="Masonry">
        <p ref={visibleRef}>
          The first challenge was producing a layout that could showcase a large
          number of images. A masonry layout seemed like the best fit, but
          existing solutions fell short. A CSS only layout was too rigid, and JS
          based layouts were either not performant, or did not work well with
          pagination.
        </p>
        <p>
          A hybrid masonry/grid solution was created, utilising CSS Grid and
          dynamically calculated <code>span</code>s.
        </p>
      </Text>

      <Container>
        <component-masonry />
      </Container>

      <Code code={masonrySet?.html} />
      <Text>
        <p>
          The index-based cache ensures that as products are added and removed,
          they maintain their dimensions and prevent the layout from needing to
          be recalculated.
        </p>
      </Text>
      <Code code={masonryCache?.html} />
    </div>
  );
};

export { Masonry };
