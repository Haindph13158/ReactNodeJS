import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import persistStore from './store/store';
import { store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore}>
        <App />
      </PersistGate>
      </Provider>,
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
