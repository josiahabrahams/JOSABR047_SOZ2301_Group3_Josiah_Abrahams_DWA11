//@ts-check
import { State } from "./store.js";
// import {Action} from "./actions.js"

/**
 * @param {State} state
 * @param {*} action is the functions used to define the states new counterValue
 * @return {State}
 */

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        counterValue: state.counterValue + 1,
      };
    }
    case "SUBTRACT": {
      return {
        ...state,
        counterValue: state.counterValue - 1,
      };
    }
    case "RESET": {
      return {
        ...state,
        counterValue: 0,
      };
    }
    default:
      return state;
  }
  return state;
};
