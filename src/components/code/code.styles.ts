import styled from '@emotion/styled';

import { GRID } from 'styles';

export const Code = styled.div`
  overflow: hidden;
  max-width: 800px;
  margin: 5vh auto;
  padding: 1em;
  font-size: 0.7em;
  background: var(--grey-dark);
  border-radius: 0.3em;

  ${GRID.sm} {
    font-size: 0.9em;
  }
  ${GRID.md} {
    font-size: 1em;
  }

  code,
  pre {
    font-family: 'Roboto Mono', Inconsolata, Monaco, Consolas, 'Courier New',
      Courier, monospace;
    font-weight: 400;
    text-align: left;
    color: #c5c8c6;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    direction: ltr;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    tab-size: 4;
    hyphens: none;
  }

  pre {
    overflow: auto;
    margin: 0;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #7c7c7c;
  }

  .token.punctuation {
    color: #c5c8c6;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.keyword,
  .token.tag {
    color: #96cbfe;
  }

  .token.class-name {
    color: #ffffb6;
    text-decoration: underline;
  }

  .token.boolean,
  .token.constant {
    color: #99cc99;
  }

  .token.symbol,
  .token.deleted {
    color: #f92672;
  }

  .token.number {
    color: #ff73fd;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #a8ff60;
  }

  .token.variable {
    color: #c6c5fe;
  }

  .token.operator {
    color: #ededed;
  }

  .token.entity {
    color: #ffffb6;
    cursor: help;
  }

  .token.url {
    color: #96cbfe;
  }

  .language-css .token.string,
  .style .token.string {
    color: #87c38a;
  }

  .token.atrule,
  .token.attr-value {
    color: #f9ee98;
  }

  .token.function {
    color: #dad085;
  }

  .token.regex {
    color: #e9c062;
  }

  .token.important {
    color: #fd971f;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }
`;
