import { STORE_IN_STATE, RECEIVE_COLORS } from '../constants';
import fetch from 'isomorphic-fetch';

export function storeInState() {
  return {
    type: STORE_IN_STATE,
    myString: 'world'
  };
}

function receiveColors(colors) {
  return {
    type: RECEIVE_COLORS,
    colors
  };
}

export function fetchColors() {
  return function(dispatch) {
    return fetch('/colors')
      .then(response => {
        return response.json();
      })
      .then(colors => {
        dispatch(receiveColors(colors[0]));
      });
  };
}
