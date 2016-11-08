import { RECEIVE_COLORS } from '../constants';
import fetch from 'isomorphic-fetch';

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
