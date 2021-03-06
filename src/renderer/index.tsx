import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import AieApp from './aie-app';
import './services/i18n';
import AppLoadFallback from './components/app-load-fallback';
import { isDevelopment } from './env-and-consts';
import { globalKeyDownHandler, globalKeyUpHandler } from './services/key-event-handler-registry';

import './index.scss';

window.addEventListener('keydown', globalKeyDownHandler);
window.addEventListener('keyup', globalKeyUpHandler);

if (!isDevelopment) {
  document.body.style.overflow = 'hidden';
}

ReactDOM.render(
  <Suspense fallback={<AppLoadFallback />}>
    <AieApp />
  </Suspense>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
