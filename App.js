import React, { Component } from 'react';
import { Provider } from 'react-redux'

import { configureStore } from './app/store/store';

import CounterContainer from './app/containers/Counter/counterContainer';

const store = configureStore();

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <CounterContainer />
      </ Provider>
    );
  }
}

export default App;
