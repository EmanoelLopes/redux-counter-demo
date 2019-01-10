import React, { Component } from 'react';
import { connect } from 'react-redux';
import types from '../store/actionTypes';

class AppContainer extends Component {
  render() {
    const {
      counter,
      increment,
      decrement,
      reset
    } = this.props;

    return(
      <div className="app-container">
        <h1>Counter</h1>
        <p>{ counter }</p>
        <button onClick={increment}> + </button>
        <button onClick={reset}> reset </button>
        <button onClick={decrement}> - </button>
      </div>
    );
  }
};

const mapStateToProps = state => ({ counter: state.counter });

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: types.INCREMENT }),
  decrement: () => dispatch({ type: types.DECREMENT }),
  reset: () => dispatch({ type: types.RESET }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
