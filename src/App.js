import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './containers/AppContainers';
import './App.css';

function App () {
  return (
    <Provider store={store}>
      <div className="App">
        <AppContainer />
      </div>
    </Provider>
  );
};

export default App;
