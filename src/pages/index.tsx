import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { CodeExampleQuery } from 'graphql-types';
import { Code, Text } from 'components';
import { Error, Masonry, Hover } from 'partials';

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
      <Text heading="Heading">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          pulvinar nisi. Nulla at ipsum tristique, volutpat lorem ut, ultrices
          nisl. Aenean sodales quam non diam pharetra, a suscipit urna
          malesuada. Aliquam ut mollis diam. Donec euismod rutrum hendrerit.
          Suspendisse elit velit, egestas ac tortor at, sollicitudin lacinia
          neque. Ut efficitur enim at sem pharetra sagittis. Aenean efficitur
          mauris vitae ex auctor, eget aliquet erat consequat.
        </p>
        <p>
          Proin id dictum quam, eu dictum mi. Proin pulvinar viverra facilisis.
          Fusce nec mauris ut dui ullamcorper pellentesque rutrum in risus.
          Suspendisse vulputate nulla turpis. Pellentesque aliquet, magna at
          tincidunt mollis, sapien ante vehicula neque, in aliquam justo neque
          vitae metus. In lorem lectus, efficitur in augue a, consequat
          convallis ligula. Etiam magna neque, tincidunt a venenatis sed,
          lobortis sit amet enim. Vivamus gravida eleifend nunc, eu posuere
          tortor tincidunt consectetur.
        </p>
      </Text>

      <Error />
      <Masonry />
      <Hover />
    </>
  );
};

export default Index;
