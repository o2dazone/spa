import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import SomeComponent from './SomeComponent';
import ColorComponent from './ColorComponent';

import { storeInState, fetchColors } from 'actions/someAction';

import styles from 'styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.onLinkClicked = this.onLinkClicked.bind(this);
  }

  componentDidMount() {
    this.props.fetchColors();
  }

  onLinkClicked(e) {
    e.preventDefault();
    const { storeInState } = this.props;
    storeInState();
  }

  render() {
    const { store, someState: { myString, colors } } = this.props;
    return (
      <Provider store={store}>
        <div className={styles.foo}>
          <p>{ myString }</p>
          <SomeComponent onLinkClicked={this.onLinkClicked} />

          { colors ? <ColorComponent colors={colors} /> : ''}
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

export default connect( mapStateToProps, { storeInState, fetchColors })(App);
