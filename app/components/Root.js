import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import SomeComponent from './SomeComponent';

import { storeInState } from 'actions/someAction';

import styles from 'styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.onLinkClicked = this.onLinkClicked.bind(this);
  }

  onLinkClicked(e) {
    e.preventDefault();
    const { storeInState } = this.props;
    storeInState();
  }

  render() {
    const { store, someState: { myString } } = this.props;
    return (
      <Provider store={store}>
        <div className={styles.foo}>
          <p>{ myString }</p>
          <SomeComponent onLinkClicked={this.onLinkClicked} />
        </div>
      </Provider>
    );
  }
}

function mapStateToProps(state) {
  return {
    someState: state.someState
  };
}

export default connect( mapStateToProps, { storeInState })(App);
