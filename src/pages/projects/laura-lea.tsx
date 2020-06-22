import React, { FC } from 'react';

import { Error, Masonry, Hover, Cart, Search, Slide } from 'partials';
import { Layout } from 'components';

const projectTitle = 'Laura Lea';

const LauraLea: FC = () => (
  <Layout projectTitle={projectTitle}>
    <Masonry />
    <Search />
    <Error />
    <Hover />
    <Cart />
    <Slide />
  </Layout>
);

export default LauraLea;
