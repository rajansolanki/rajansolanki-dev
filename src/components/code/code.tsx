import React, { FC } from 'react';
import { InferProps, string } from 'prop-types';

import { Code as CodeStyled } from './code.styles';

const propTypes = {
  className: string,
  code: string,
};
type Props = InferProps<typeof propTypes>;

const Code: FC<Props> = ({ className, code }) => (
  <CodeStyled
    className={className || undefined}
    dangerouslySetInnerHTML={{
      __html: code || '',
    }}
  />
);

Code.propTypes = propTypes;

export { Code };
