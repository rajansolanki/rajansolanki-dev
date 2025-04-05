import React, { FC } from 'react';
import { InferProps, string } from 'prop-types';
import { getHighlighter } from 'shiki';

import { Code as CodeStyled } from './code.styles';

const highlighter = await getHighlighter({
  themes: [
    {
      name: 'custom',
      settings: [
        {
          scope: ['comment'],
          settings: {
            foreground: '#888',
          },
        },
      ],
    },
  ],
  langs: ['typescript', 'html'],
});

const propTypes = {
  className: string,
  lang: string.isRequired,
  code: string.isRequired,
};
type Props = InferProps<typeof propTypes>;

const Code: FC<Props> = async ({ className, lang, code }) => (
  <CodeStyled className={className || undefined}>
    <div>
      <pre>
        <code
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: await highlighter.codeToHtml(code, {
              lang,
              theme: 'custom',
            }),
          }}
        />
      </pre>
    </div>
  </CodeStyled>
);

Code.propTypes = propTypes;

export { Code };
