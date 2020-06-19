import React, { FC } from 'react';

import { useComponent, useVisible } from 'shared';
import { Text } from 'components';
import { Container } from './cart.styles';

const cartComponent = import('@bit/rajansolanki.dev.cart');

const Cart: FC = () => {
  const [visibleRef, isVisible] = useVisible();
  useComponent(cartComponent, isVisible);

  return (
    <div>
      <Text heading="Cart">
        <p ref={visibleRef}>Optimistic response</p>
      </Text>

      <Container>
        <component-cart />
      </Container>
    </div>
  );
};

export { Cart };
