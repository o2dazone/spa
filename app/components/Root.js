import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import SomeComponent from './SomeComponent';

import styles from 'styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div className={styles.foo}>
          <SomeComponent />
        </div>
      </Provider>
    );
  }
}

export default connect()(App);
