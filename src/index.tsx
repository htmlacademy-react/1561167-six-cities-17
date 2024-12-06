import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { shortOffers } from './mocks/short-offers';
import { offer } from './mocks/offer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App shortOffers={shortOffers} offer={offer} />
  </React.StrictMode>
);

