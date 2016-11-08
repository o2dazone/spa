import * as actionTypes from 'constants';

export default function someState(state = { myString: 'hello' }, action) {
  const { type, myString, colors } = action;

  switch (type) {
  case actionTypes.STORE_IN_STATE:
    return {...state, myString};
  case actionTypes.RECEIVE_COLORS:
    return {...state, colors}
  default:
    return state;
  }
}
