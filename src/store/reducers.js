import { combineReducers } from 'redux';
import initialState from './state';
import types from './actionTypes';

const counter = function counter(state = initialState.counter, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    case types.RESET:
      return state = 0;
    default:
      return state;
    }
};

const reducers = combineReducers({
  counter
});

export default reducers;

