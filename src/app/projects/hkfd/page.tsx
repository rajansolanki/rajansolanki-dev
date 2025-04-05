import { Metadata } from 'next';
import { Intro } from 'src/components/layout/intro/intro';
import { Job } from 'src/components/layout/job/job';
import { Link } from 'src/components/layout/link/link';
import { Text } from 'src/components/text/text';
import { Code } from 'src/components/code/code';

export const metadata: Metadata = {
  title: 'HKFD',
};

type Props = {};

const Page = ({}: Props) => {
  return (
    <>
      <Intro
        title="HKFD"
        role="Developer"
        description={
          <>
            <p>
              Heckford is an advertising agency based in Lancashire with over 40
              years of experience.
            </p>
            <p>
              The aim of the site was to create a modern display of their
              portfolio of work.
            </p>
            <p>
              The previous website used Wordpress, with 3rd-party plugins
              providing the majority of the functionality.
            </p>
          </>
        }
        url="https://hkfd.co.uk"
        tags={[
          'angular',
          'typescript',
          'node.js',
          'sass',
          'json',
          'google firebase',
          'prismic',
          'jest',
          'protractor',
        ]}
      />
      <Text>
        <p>The end result is a monorepo with 3 packages:</p>
        <ol>
          <li>
            <strong>Angular</strong>
            <br />
            The frontend
          </li>
          <li>
            <strong>API</strong>
            <br />
            The data for the site, along with its types
          </li>
          <li>
            <strong>Email</strong>
            <br />
            The firebase function containing the backend logic for the contact
            form
          </li>
        </ol>
        <p>
          The monorepo structure allows the CI to lint, test, and deploy one or
          more packages based on the changes.
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
          withstand breaking changes from their end.
        </p>
        <p>
          Since most of the data on the site wasn’t going to be regularly
          updated, I created our own.
        </p>
      </Text>
      <Code
        lang="typescript"
        code={`export interface TextAttributes {
  bold?: boolean;
  italic?: boolean;
  heading?: boolean;
}

export interface Sentence {
  text: string;
  url?: string;
  attributes?: TextAttributes;
}

export interface Text {
  paragraph?: Sentence[];
  list?: Sentence[];
}

export interface TextBlock extends Block {
  type: 'text';
  data: Text[];
}

interface Content {
  title?: string;
  data: (
    | TextBlock
    | ImageBlock
    | GalleryBlock
    | VideoBlock
    | AudioBlock
    | DuoBlock
  )[];
}`}
      />
      <Text>
        <p>
          The data was written in TypeScript for type-checking, and consumed as
          JSON from the API.
        </p>
      </Text>
      <Code
        lang="html"
        code={`<ng-container *ngIf="text" [ngSwitch]="true">
  <ng-template [ngSwitchCase]="!!text.url">
    <a
      href="{{ text?.url }}"
      target="_blank"
      rel="nofollow noopener"
      [attr.aria-label]="text?.text"
    >
      {{ text?.text }}
    </a>
  </ng-template>
  <ng-template [ngSwitchCase]="text?.attributes?.heading">
    <h3>{{ text?.text }}</h3>
  </ng-template>
  <ng-template [ngSwitchCase]="text?.attributes?.bold">
    <b>{{ text?.text }}</b>
  </ng-template>
  <ng-template [ngSwitchCase]="text?.attributes?.italic">
    <i>{{ text?.text }}</i>
  </ng-template>
  <ng-template ngSwitchDefault>{{ text?.text }}</ng-template>
</ng-container>`}
      />

      <Job
        company="Absolutely Studio"
        date={{ start: '2015-01-01', end: '2017-01-01' }}
        title="Designer & Developer"
        description={
          <ul>
            <li>Co-designed all print and digital media</li>
            <li>Developed websites</li>
          </ul>
        }
      />
      <Link
        slug="laura-lea"
        title="Laura Lea"
        overview="Gallery website with shop functionality"
      />
    </>
  );
};

export default Page;
