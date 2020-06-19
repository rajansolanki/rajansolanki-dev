import React, { FC } from 'react';

import { Error, Masonry, Hover, Cart, Search, Slide } from 'partials';

const LauraLea: FC = () => (
  <>
    <div style={{ height: '100vh' }} />
    <Masonry />
    <Search />
    <Error />
    <Hover />
    <Cart />
    <Slide />
  </>
);

export default LauraLea;
