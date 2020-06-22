import React, { FC } from 'react';

import { Spacer, Footer as FooterStyled } from './footer.styles';

const Footer: FC = () => (
  <>
    <Spacer />
    <FooterStyled>
      <a href="mailto:dev@rajansolanki.com">dev@rajansolanki.com</a>
    </FooterStyled>
  </>
);

export { Footer };
