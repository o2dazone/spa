import * as actionTypes from 'constants';

export default function someState(state = {}, action) {
  const { type, colors } = action;

  switch (type) {
  case actionTypes.RECEIVE_COLORS:
    return { ...state, colors };
  default:
    return state;
  }
}
