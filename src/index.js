import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {getShoppingListItems} from './actions/shoppingListItemActions'
import App from './App';
import './index.css';
import { createStore } from 'redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';

const store = createStore(shoppingListItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
