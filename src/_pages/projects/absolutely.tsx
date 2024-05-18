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
          The outcome is a fairly simple design: a contact form with news posts
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
          The purpose of the form was to provide a very quick and painless way
          for people to get in touch with the studio. In reality, unnecessary
          friction was created by the lack of two-way data binding. Validation
          was run only on submit, and managing loading and error states was also
          unnecessarily complex.
        </p>
        <p>
          To add to that, as a <code>textarea</code> is not vertically
          responsive, <code>contenteditable</code> was used instead. To avoid
          sanitising the html before submission, the contents were piped to a
          hidden input field.
        </p>
      </Text>
      <Code code={inputSet?.html} />

      <Text heading="Animations">
        <p>
          The form had a design that revealed the email input on click. The goal
          was to animate its entrance by pushing the rest of the content further
          down the page. Since <code>height</code> is not animatable from{' '}
          <code>0</code> to <code>auto</code>, and neither it or any related
          properties can be animated without recalculating layout, a workaround
          had to be used.
        </p>
        <p>
          Animating <code>max-height</code> between <code>0</code> and a large
          value wouldn’t work in this situation, as the element needed to be
          part of the document flow. Adding a JS animation library would take up
          the majority of the bundle, so that didn’t seem like a suitable
          solution, either.
        </p>
        <p>
          The resolution was to explicitly set the height of the contact form
          and email input.
        </p>
      </Text>
      <Code code={revealStyles?.html} />
      <Text>
        <p>
          Since the initial heights are hardcoded, a negative offset using{' '}
          <code>transform</code> could be added to the elements underneath the
          form, and animated away on click without causing a reflow.
        </p>
        <p>
          Of course, hardcoding the height of the form also meant making sure
          the contents did not then overflow. With it being text,{' '}
          <code>br</code>s were added that were toggled at different screen
          sizes, maintaining a consistent line count.
        </p>
      </Text>
      <Code code={contentEditable?.html} />

      <Text heading="React">
        <p>
          The complexity of the code showed in the user experience, despite the
          form having only two fields.
        </p>
        <p>
          Achieving a good solution to both problems, on a static site, involved
          some &lsquo;creative&rsquo; workarounds that traded maintainability
          for the end result. Both were easily solved by switching to React. The
          state management was handled by <code>formik</code>, and the
          animations by <code>react-spring</code>.
        </p>
      </Text>
      <Code code={reactAnimations?.html} />
      <Code code={reactForm?.html} />
    </Layout>
  );
};

export default Absolutely;
