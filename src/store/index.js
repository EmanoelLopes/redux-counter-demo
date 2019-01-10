import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

const compose = composeWithDevTools(applyMiddleware(thunk, logger));

const store = createStore(
  reducers,
  compose,
);

export default store;
