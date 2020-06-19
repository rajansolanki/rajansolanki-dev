import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useComponent, useVisible } from 'shared';
import { Text } from 'components';
import { CodeHoverQuery } from 'graphql-types';
import { Container, Code } from './hover.styles';

const hoverComponent = import('@bit/rajansolanki.dev.hover');

const Hover: FC = () => {
  const codeHoverData: CodeHoverQuery = useStaticQuery(graphql`
    query CodeHover {
      markdownRemark(fileAbsolutePath: { glob: "**/laura-lea/hover.md" }) {
        html
      }
    }
  `);

  const [visibleRef, isVisible] = useVisible();

  useComponent(hoverComponent, isVisible);

  return (
    <div>
      <Text heading="Hover">
        <p ref={visibleRef}>The interactions around the cart</p>
      </Text>

      <Container>
        <component-hover />
        <Code code={codeHoverData.markdownRemark?.html} />
      </Container>
    </div>
  );
};

export { Hover };
