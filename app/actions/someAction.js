import { STORE_IN_STATE } from '../constants';

export function storeInState() {
  return {
    type: STORE_IN_STATE,
    myString: 'world'
  };
}
