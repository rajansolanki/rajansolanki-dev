import React, { FC, useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useComponent, useVisible } from 'shared';
import { Text, Code } from 'components';
import { CodeBannerQuery } from 'graphql-types';
import { LoadMore } from './load-more/load-more';
import { Error as ErrorStyled, Container } from './error.styles';

const errorComponent = import('@bit/rajansolanki.dev.error');

type ErrorType = 'app' | 'global' | undefined;

const Error: FC = () => {
  const {
    bannerDisplay,
    bannerCatch,
    bannerStream,
  }: CodeBannerQuery = useStaticQuery(graphql`
    query CodeBanner {
      bannerDisplay: markdownRemark(
        fileAbsolutePath: { glob: "**/laura-lea/banner-display.md" }
      ) {
        html
      }
      bannerCatch: markdownRemark(
        fileAbsolutePath: { glob: "**/laura-lea/banner-catch.md" }
      ) {
        html
      }
      bannerStream: markdownRemark(
        fileAbsolutePath: { glob: "**/laura-lea/banner-stream.md" }
      ) {
        html
      }
    }
  `);

  const [errorType, setErrorType] = useState<ErrorType>('app');

  const [appVisibleRef, appIsVisible] = useVisible();
  const [globalVisibleRef, globalIsVisible] = useVisible();

  useEffect(() => {
    globalIsVisible && setErrorType('global');
  }, [globalIsVisible]);

  useComponent(errorComponent, appIsVisible);

  return (
    <ErrorStyled>
      <component-error type={errorType} />

      <Text heading="Errors">
        <p>
          Error handling was something I wanted to focus on for this website. In
          the past, my error handling had mostly consisted of logging, instead
          of offering the user possible ways to fix the problem.
        </p>
        <p>
          Since the concept of GraphQL is to only request the data you need,
          there are often multiple network requests to fetch the data for a
          single product. It is inevitable that at some point, a request will
          fail.
        </p>
      </Text>

      <Container ref={appVisibleRef}>
        <Text>
          <p>To handle this, the app uses a banner.</p>
        </Text>
      </Container>

      <Code code={bannerDisplay?.html} />
      <Code code={bannerCatch?.html} />
      <Code code={bannerStream?.html} />

      <LoadMore />

      <Container>
        <Text>
          <p>
            If things were to go south from there, the global error banner would
            be displayed.
          </p>
          <p>
            Since errors in Angular can only be caught by the global error
            handler, this would also be triggered for any errors thrown that
            aren&rsquo;t recoverable.
          </p>
          <p ref={globalVisibleRef}>
            The user is offered a page refresh with a `window.reload`, and a
            back link if they are on the product detail page. These buttons are
            wired outside of Angular, so they still function should a fatal
            error occur.
          </p>
        </Text>
      </Container>
    </ErrorStyled>
  );
};

export { Error };
