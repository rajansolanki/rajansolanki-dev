import React, { FC } from 'react';

import { animated, useTrail } from 'react-spring';

import { Header as HeaderStyled } from './header.styles';

const Header: FC = () => {
  const [h1Styles, h2Styles] = useTrail(2, {
    from: { height: '0px', transform: 'translateY(0%)' },
    height: '100%',
    transform: 'translateY(-50%)',
    config: { tension: 350 },
  });

  return (
    <HeaderStyled>
      <div>
        <animated.h1 style={h1Styles}>Raj</animated.h1>
        <animated.h2 style={h2Styles}>Designer &amp; Developer</animated.h2>
      </div>
    </HeaderStyled>
  );
};

export { Header };
