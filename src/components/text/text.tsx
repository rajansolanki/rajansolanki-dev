import React, { FC, ReactNode } from 'react';
import { InferProps, string, node } from 'prop-types';

import { Text as TextStyled, Container } from './text.styles';

const propTypes = {
  heading: string,
  children: node.isRequired,
};
type Props = InferProps<typeof propTypes>;

const Text: FC<Props> = ({ heading, children }) => {
  const renderHeading = (): ReactNode => heading && <h4>{heading}</h4>;

  return (
    <TextStyled>
      <Container>
        {renderHeading()}
        {children}
      </Container>
    </TextStyled>
  );
};

Text.propTypes = propTypes;

export { Text };
