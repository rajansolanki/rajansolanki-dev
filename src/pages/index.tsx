import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { CodeExampleQuery } from 'graphql-types';
import { Code } from 'components';

const Index: FC = () => {
  const codeExampleData: CodeExampleQuery = useStaticQuery(graphql`
    query CodeExample {
      markdownRemark(frontmatter: { title: { eq: "Code example" } }) {
        html
      }
    }
  `);

  return (
    <>
      <header>
        <h1>Hello</h1>
      </header>
      <Code code={codeExampleData.markdownRemark?.html} />
    </>
  );
};

export default Index;
