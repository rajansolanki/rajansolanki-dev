import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Layout, Text, Code } from 'components';
import { AbsolutelyCodeQuery } from 'graphql-types';

const projectTitle = 'Absolutely Studio';

const Absolutely: FC = () => {
  const {
    revealStyles,
    inputSet,
    contentEditable,
    reactAnimations,
    reactForm,
  }: AbsolutelyCodeQuery = useStaticQuery(graphql`
    query AbsolutelyCode {
      inputSet: markdownRemark(
        fileAbsolutePath: { glob: "**/absolutely/input-set.md" }
      ) {
        html
      }
      revealStyles: markdownRemark(
        fileAbsolutePath: { glob: "**/absolutely/reveal-styles.md" }
      ) {
        html
      }
      contentEditable: markdownRemark(
        fileAbsolutePath: { glob: "**/absolutely/content-editable.md" }
      ) {
        html
      }
      reactAnimations: markdownRemark(
        fileAbsolutePath: { glob: "**/absolutely/react-animations.md" }
      ) {
        html
      }
      reactForm: markdownRemark(
        fileAbsolutePath: { glob: "**/absolutely/react-form.md" }
      ) {
        html
      }
    }
  `);

  return (
    <Layout projectTitle={projectTitle}>
      <Text>
        <p>
          The outcome is a fairly simple design; a contact form, with news posts
          underneath. The site went through several development iterations,
          originally using Gulp, then Parcel, and most recently, Gatsby. The
          jump to React was made in order to solve two pain points of the site:
        </p>
        <ol>
          <li>Form state</li>
          <li>Animating height</li>
        </ol>
      </Text>

      <Text heading="State">
        <p>
          The purpose of the form was to provide a very quick, and painless way
          for people to get in touch with the studio. In reality, unnecessary
          friction was created by the lack of two-way data binding. Validation
          was run only on submit, and managing loading and error states was also
          unnecessarily complex.
        </p>
        <p>
          To add to that, as a `textarea` is not vertically responsive,
          `contenteditable` was used instead. To avoid sanitising the html
          before submission, the contents were piped to a hidden input field.
        </p>
      </Text>
      <Code code={inputSet?.html} />
      <Text>
        <p>
          The complexity of the code showed in the user experience, despite the
          form having only two fields.
        </p>
      </Text>

      <Text heading="Animations">
        <p>
          The contact form was designed to reveal an email input on click. The
          goal was to animate its entrance by pushing the rest of the content
          further down the page. Since `height` is not animatable from `0` to
          `auto`, and neither it or any related properties can be animated
          without recalculating layout, another solution had to be found.
        </p>
        <p>
          A workaround of animating `max-height` between `0` and a large value
          wouldnt work in this situation, as the element needed to be part of
          the document flow. Adding an JS animation library would take up the
          majority of the bundle, so that didnt seem like a suitable solution,
          either.
        </p>
        <p>
          The resolution was to explicitly set the height of the contact form
          and email input.
        </p>
      </Text>
      <Code code={revealStyles?.html} />
      <Text>
        <p>
          Since the initial heights are hardcoded, a negative offset using
          `transform` could be added to the elements underneath the form, and
          animated away on click without causing a reflow.
        </p>
        <p>
          Of course, hardcoding the height of the form also meant making sure
          the contents did not then overflow. With the contents being text,
          `br`s were added that were toggled at different screen sizes to keep a
          consisted line count.
        </p>
      </Text>
      <Code code={contentEditable?.html} />

      <Text heading="React">
        <p>
          Achieving a good solution to both problems, on a static site, involved
          some &lsquo;creative&rsquo; workarounds that traded maintainability
          for the end result. Both were easily solved by switching to React. The
          state management was handled by `formik`, and the animations by
          `react-spring`
        </p>
      </Text>
      <Code code={reactAnimations?.html} />
      <Code code={reactForm?.html} />
    </Layout>
  );
};

export default Absolutely;
