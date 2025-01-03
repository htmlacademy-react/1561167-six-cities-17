import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { favorites } from './mocks/favorites';
import { store } from './store';
import { checkAuthorizationStatus, uploadOffers } from './store/api-actions';
import { ErrorMessage } from './components/error-message/error-message';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(uploadOffers());
store.dispatch(checkAuthorizationStatus());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App offers={offers} favorites={favorites} />
    </Provider>
  </React.StrictMode>
);
