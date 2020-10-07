import React, { FC } from 'react';

import { Spacer, Footer as FooterStyled } from './footer.styles';

const Footer: FC = () => (
  <>
    <Spacer />
    <FooterStyled>
      <a
        href="https://github.com/rajansolanki"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        github.com/rajansolanki
      </a>
    </FooterStyled>
  </>
);

export { Footer };
