import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useComponent, useVisible } from 'shared';
import { Text } from 'components';
import { CodeHoverQuery } from 'graphql-types';
import { Container, Code } from './hover.styles';

const hoverComponent = import('@bit/rajansolanki.dev.hover');

const Hover: FC = () => {
  const { hover }: CodeHoverQuery = useStaticQuery(graphql`
    query CodeHover {
      hover: markdownRemark(
        fileAbsolutePath: { glob: "**/laura-lea/hover.md" }
      ) {
        html
      }
    }
  `);

  const [visibleRef, isVisible] = useVisible();

  useComponent(hoverComponent, isVisible);

  return (
    <div>
      <Text heading="Hover">
        <p ref={visibleRef}>
          A small detail we added to the design of the shopping experience was
          the effect on the buy and checkout buttons.
        </p>
        <p>
          Since these listeners do not do any blocking work, they are attached
          manually as `passive` event listeners, instead of utilising
          Angular&rsquo;s `@HostListener` directive.
        </p>
      </Text>

      <Container>
        <component-hover />
        <Code code={hover?.html} />
      </Container>
    </div>
  );
};

export { Hover };
