import React, { FC } from 'react';
import { InferProps, string } from 'prop-types';

import { Code as CodeStyled } from './code.styles';

const propTypes = {
  code: string,
};
type Props = InferProps<typeof propTypes>;

const Code: FC<Props> = ({ code }) => (
  <CodeStyled
    dangerouslySetInnerHTML={{
      __html: code || '',
    }}
  />
);

Code.propTypes = propTypes;

export { Code };
