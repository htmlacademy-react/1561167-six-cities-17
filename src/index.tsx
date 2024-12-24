import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { shortOffers } from './mocks/short-offers';
import { offers } from './mocks/offers';
import { favorites } from './mocks/favorites';
import { store } from './store';
import { getOffers } from './store/actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(getOffers(shortOffers));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} favorites={favorites} />
    </Provider>
  </React.StrictMode>
);
