import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { shortOffers } from './mocks/short-offers';
import { offers } from './mocks/offers';
import { favorites } from './mocks/favorites';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App shortOffers={shortOffers} offers={offers} favorites={favorites} />
  </React.StrictMode>
);

