import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useComponent, useVisible } from 'shared';
import { Text } from 'components';
import { CodeSlideQuery } from 'graphql-types';
import { Container, Code } from './slide.styles';

const slideComponent = import('@bit/rajansolanki.dev.slide');

const Slide: FC = () => {
  const codeSlideData: CodeSlideQuery = useStaticQuery(graphql`
    query CodeSlide {
      markdownRemark(fileAbsolutePath: { glob: "**/laura-lea/slide.md" }) {
        html
      }
    }
  `);

  const [visibleRef, isVisible] = useVisible();
  useComponent(slideComponent, isVisible);

  return (
    <div>
      <Text heading="Slide">
        <p ref={visibleRef}>The product detail slider</p>
      </Text>

      <Container>
        <component-slide />
        <Code code={codeSlideData.markdownRemark?.html} />
      </Container>
    </div>
  );
};

export { Slide };
