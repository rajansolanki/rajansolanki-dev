import React, { FC } from 'react';

import { LoadMore } from './load-more/load-more';
import { Banner } from './banner/banner';

const Error: FC = () => {
  return (
    <>
      <LoadMore />
      <Banner />
    </>
  );
};

export { Error };
