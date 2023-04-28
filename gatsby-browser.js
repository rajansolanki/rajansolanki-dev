import './src/styles/reset.css';
import './src/styles/global.css';

import 'zone.js/dist/zone';
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import { init } from '@sentry/react';

init({
  dsn: 'https://09cb08fa63a04312aa385f56b8d71b44@o353586.ingest.sentry.io/5304025',
  environment: process.env.NODE_ENV,
  enabled: process.env.NODE_ENV !== 'development',
});

export const shouldUpdateScroll = () => false;

export { wrapPageElement } from './src/components/root';
