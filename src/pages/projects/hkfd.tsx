import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Layout, Text, Code } from 'components';
import { HkfdCodeQuery } from 'graphql-types';

const projectTitle = 'HKFD';

const HKFD: FC = () => {
  const { types, template, server }: HkfdCodeQuery = useStaticQuery(graphql`
    query HkfdCode {
      types: markdownRemark(fileAbsolutePath: { glob: "**/hkfd/types.md" }) {
        html
      }
      template: markdownRemark(
        fileAbsolutePath: { glob: "**/hkfd/template.md" }
      ) {
        html
      }
      server: markdownRemark(fileAbsolutePath: { glob: "**/hkfd/server.md" }) {
        html
      }
    }
  `);

  return (
    <Layout projectTitle={projectTitle}>
      <Text>
        <p>The end result is a monorepo with 3 packages:</p>
        <ol>
          <li>
            Angular
            <br />
            The front end.
          </li>
          <li>
            API
            <br />
            The data for the site, along with its types.
          </li>
          <li>
            Email
            <br />
            The firebase function containing the backend logic for the contact
            form.
          </li>
        </ol>
        <p>
          The monorepo structure allows the CI to lint, test, and deploy one or
          more packages based on changes.
        </p>
      </Text>

      <Text heading="Data">
        <p>
          Currently, data is provided to the site in two ways. Case studies,
          clients, services, and team on a Firebase JSON API, and careers and
          news posts on Prismic.
        </p>
        <p>
          At the time, there were no headless CMS services that both included
          the features we wanted, and an Angular client. Writing a compatibility
          layer for their data structures was possible, but wasn’t guaranteed to
          withstand breaking changes.
        </p>
        <p>
          Since most of the data on the site wasn’t going to be regularly
          updated, I created our own.
        </p>
      </Text>
      <Code code={types?.html} />
      <Text>
        <p>
          The data was written in typescript for type-checking, and consumed as
          JSON from the API.
        </p>
      </Text>
      <Code code={template?.html} />

      <Text heading="SSR">
        <p>
          The key requests for the site were for it to retain its compatibility
          for older browsers, and be SEO friendly.
        </p>
        <p>
          As with any JS framework, polyfilling and transpiling cannot achieve
          the same compatibility as static HTML, and as for SEO, not all search
          engines render JS.
        </p>
        <p>
          To achieve these goals, the site uses server side rendering. An
          Express server passes requests to Angular Universal, which generates
          static HTML that is rehydrated by the client.
        </p>
      </Text>
      <Code code={server?.html} />
      <Text>
        <p>
          Despite the mostly static pages, rendering on request prevents the few
          dynamic pages from being stale for the user and web crawler.
        </p>
      </Text>
    </Layout>
  );
};

export default HKFD;
