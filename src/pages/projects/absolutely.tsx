import React, { FC } from 'react';

import { Layout } from 'components';

const projectTitle = 'Absolutely Studio';

const Absolutely: FC = () => (
  <Layout projectTitle={projectTitle}>
    Content
    <div style={{ height: '100vh' }} />
  </Layout>
);

export default Absolutely;
