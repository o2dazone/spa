import * as actionTypes from 'constants';

export default function someState(state = { myString: 'hello' }, action) {
  const { type, myString } = action;

  switch (type) {
  case actionTypes.STORE_IN_STATE:
    return {...state, myString};
  default:
    return state;
  }
}
