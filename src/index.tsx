import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import { ERROR_SHOW_TIMEOUT } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-center"
        autoClose={ERROR_SHOW_TIMEOUT}
        theme="colored"
      />
      <App />
    </Provider>
  </React.StrictMode>
);
