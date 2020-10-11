import React, { FC } from 'react';

import { Error, Masonry, Hover, Cart, Search, Slide } from 'partials';
import { Layout, Text } from 'components';

const projectTitle = 'Laura Lea';

const LauraLea: FC = () => (
  <Layout projectTitle={projectTitle}>
    <Text>
      <p>
        Shopify was chosen as the sales platform because of its inventory and
        payment system easily managed by Laura. Since we were dealing with
        potentially multiple variants per product, their GraphQL API offered a
        way to scale the application without also scaling the size of the data.
      </p>
      <p>
        The end result is an Angular frontend, with <code>apollo-angular</code>{' '}
        as the GraphQL client. Unfortunately, the site never went live.
      </p>
    </Text>
    <Masonry />
    <Search />
    <Error />
    <Hover />
    <Cart />
    <Slide />
  </Layout>
);

export default LauraLea;
