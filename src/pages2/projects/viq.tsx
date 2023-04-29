import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Layout, Text, Code } from 'components';
import { ViqCodeQuery } from 'graphql-types';

const projectTitle = 'VIQ';

const VIQ: FC = () => {
  const { sleep, visible }: ViqCodeQuery = useStaticQuery(graphql`
    query ViqCode {
      sleep: markdownRemark(fileAbsolutePath: { glob: "**/viq/sleep.md" }) {
        html
      }
      visible: markdownRemark(fileAbsolutePath: { glob: "**/viq/visible.md" }) {
        html
      }
    }
  `);

  return (
    <Layout projectTitle={projectTitle}>
      <Text>
        <p>
          The result is a single page static website, using{' '}
          <code>parcel-bundler</code> as the builder.
        </p>
      </Text>

      <Text heading="Animation">
        <p>
          To showcase the brand identity, we added a playful animation using 2d
          physics engine <code>matter-js</code>.
        </p>
        <p>
          To help performance, these animations are created only when the canvas
          enters the viewport, and after animating, become static elements.
        </p>
      </Text>
      <Code code={sleep?.html} />
      <Text>
        <p>
          Both the canvas and text animations on the site are triggered using{' '}
          <code>IntersectionObserver</code>. The function&rsquo;s callback
          implementation allows it to be independent of the logic that runs
          after it is triggered.
        </p>
      </Text>
      <Code code={visible?.html} />
    </Layout>
  );
};

export default VIQ;
