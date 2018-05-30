import React, { Component } from 'react';
import Router from './router'
import { Provider } from 'react-redux';
import store from '../redux/store'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router/>
      </div>
    );
  }
}

const AppWithRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
export default AppWithRedux;
