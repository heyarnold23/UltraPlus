import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
import * as profileActions from './store/profiles'
import * as avatarActions from './store/avatars'


const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.profileActions = profileActions;
  window.avatarActions = avatarActions;
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <ModalProvider>
          <App />
        </ModalProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
