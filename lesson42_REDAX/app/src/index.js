import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
 
import App from './components/App';
import redusers from './reducers';
// import counterReducer from './reducers/counterReducer';

const store = createStore(redusers);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
