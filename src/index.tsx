import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { favorites } from './mocks/favorites';
import { store } from './store';
import { checkAuthorizationAction, uploadOffersAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(uploadOffersAction());
store.dispatch(checkAuthorizationAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} favorites={favorites} />
    </Provider>
  </React.StrictMode>
);
