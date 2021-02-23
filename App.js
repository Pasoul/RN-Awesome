import React from 'react';
import AppContainer from './src/router';
import {Provider} from 'react-redux';
import dvaStore from './src/models/index';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={dvaStore}>
        <AppContainer />
      </Provider>
    );
  }
}
