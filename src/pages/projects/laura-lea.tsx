import React, { FC } from 'react';

import { Error, Masonry, Hover, Cart, Search, Slide } from 'partials';

const LauraLea: FC = () => (
  <>
    <h1>Laura Lea</h1>
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
