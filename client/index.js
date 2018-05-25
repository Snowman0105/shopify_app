import 'babel-polyfill';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from '../client/containers/App';
import intl from 'intl';
import en from 'intl/locale-data/jsonp/en.js';
import de from 'intl/locale-data/jsonp/de.js';

import history from '../client/browserHistory';
import configureStore from '../client/configureStore';
import initializeNotify from '../client/utils/notify';
import { translationMessages } from '../client/i18n.js';


const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');
global.notify = initializeNotify(store);


const render = (messages) =>{
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}

render();

if (module.hot) {
  module.hot.accept(['../client/i18n', '../client/containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(intl);
  }))
    .then(() => Promise.all([
      en,
      de
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}
