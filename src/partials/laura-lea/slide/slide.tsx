import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useComponent, useVisible } from 'shared';
import { Text } from 'components';
import { CodeSlideQuery } from 'graphql-types';
import { Container, Code } from './slide.styles';

const slideComponent = import('@bit/rajansolanki.dev.slide');

const Slide: FC = () => {
  const { slideQuery, slideResolver }: CodeSlideQuery = useStaticQuery(graphql`
    query CodeSlide {
      slideQuery: markdownRemark(
        fileAbsolutePath: { glob: "**/laura-lea/slide-query.md" }
      ) {
        html
      }
      slideResolver: markdownRemark(
        fileAbsolutePath: { glob: "**/laura-lea/slide-resolver.md" }
      ) {
        html
      }
    }
  `);

  const [visibleRef, isVisible] = useVisible();
  useComponent(slideComponent, isVisible);

  return (
    <div>
      <Text heading="Cache">
        <p>
          The structure of the app means that often components share data
          requirements, but are physically unrelated. For example, the variant
          select is not located within the product detail module.
        </p>
        <p ref={visibleRef}>
          Instead of using a service or hoisting the data to a shared parent
          component, the site uses the <code>@client</code> feature of Apollo
          cache.
        </p>
      </Text>

      <Container>
        <component-slide />
        <div>
          <Code code={slideQuery?.html} />
          <Code code={slideResolver?.html} />
        </div>
      </Container>

      <Text>
        <p>
          Since the active variant <code>id</code> is set in the cache, the
          component fetching the data can query both local and remote data at
          the same time. This removes the need for components to maintain their
          own state.
        </p>
      </Text>
    </div>
  );
};

export { Slide };
