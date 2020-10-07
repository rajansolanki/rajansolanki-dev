import './src/styles/reset.css';
import './src/styles/global.css';

import 'zone.js/dist/zone';
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import { init } from '@sentry/react';
import React from 'react';

import { Root } from './src/components/root';

init({
  dsn:
    'https://09cb08fa63a04312aa385f56b8d71b44@o353586.ingest.sentry.io/5304025',
  environment: process.env.NODE_ENV,
  enabled: process.env.NODE_ENV !== 'development',
});

// eslint-disable-next-line react/prop-types
export const wrapPageElement = ({ element }) => <Root>{element}</Root>;

export const shouldUpdateScroll = ({
  routerProps: {
    location: { action },
  },
}) => {
  if (action !== 'PUSH') return true;

  const intros = document.getElementsByClassName('intro');
  const nextIntro = intros[intros.length - 1];
  if (!nextIntro) return false;

  nextIntro.scrollIntoView({ behavior: 'smooth' });
  return false;
};
