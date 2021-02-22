import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { dishReducer } from './store/reducers/dishReducer';
import { cartReducer } from './store/reducers/cartReducer';

const rootReducer = combineReducers({
  dish: dishReducer,
  cart: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

const app = (
  <Provider store = {store}>
    <App/>
  </Provider>
);

ReactDOM.render(app,document.getElementById('root'));
