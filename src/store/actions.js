import types from './actionTypes';

function increment(payload) {
  return {
    type: types.INCREMENT,
    payload,
  };
};

function decrement(payload) {
  return {
    type: types.DECREMENT,
    payload,
  };
};

function reset(payload) {
  return {
    type: types.RESET,
    payload,
  };
};

export {
  increment,
  decrement,
  reset
};
