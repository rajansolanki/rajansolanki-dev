import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useComponent, useVisible } from 'shared';
import { Text, Code } from 'components';
import { CodeCartQuery } from 'graphql-types';
import { Container } from './cart.styles';

const cartComponent = import('@bit/rajansolanki.dev.cart');

const Cart: FC = () => {
  const { cart }: CodeCartQuery = useStaticQuery(graphql`
    query CodeCart {
      cart: markdownRemark(fileAbsolutePath: { glob: "**/laura-lea/cart.md" }) {
        html
      }
    }
  `);

  const [visibleRef, isVisible] = useVisible();
  useComponent(cartComponent, isVisible);

  return (
    <div>
      <Text heading="Cart">
        <p>
          A key part of GraphQL is the transferring of work from the client to
          the server. Not only does the user have to have a consistent network
          connection, network requests have to be made to change local data.
          Building a cart means that every quantity update requires a network
          round trip.
        </p>
        <p>
          `apollo-angular` offers a solution to this in the form of an
          &lsquo;optimistic response&rsquo;. Since the eventual response of the
          serve can be predicted, that information can be used to update the UI.
          When the actual response arrives, the prediction is replaced with the
          data.
        </p>
      </Text>

      <Code code={cart?.html} />

      <Text>
        <p ref={visibleRef}>
          Calculating the result locally means that the user gets to benefit
          from all interactions having an immediate response. Rather than
          delaying the next update, or disabling any further updates until the
          first has succeeded, the network request is resolved in the
          background. Users with slower network connections are delivered the
          same experience others.
        </p>
      </Text>

      <Container>
        <component-cart />
      </Container>
    </div>
  );
};

export { Cart };
