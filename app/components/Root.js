import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import ColorComponent from './ColorComponent';
import { fetchColors } from 'actions/someAction';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchColors();
  }

  render() {
    const { store, someState: { colors } } = this.props;
    return (
      <Provider store={store}>
        { colors ? <ColorComponent colors={colors} /> : ''}
      </Provider>
    );
  }
}

function mapStateToProps(state) {
  return {
    someState: state.someState
  };
}

export default connect( mapStateToProps, { fetchColors })(App);
