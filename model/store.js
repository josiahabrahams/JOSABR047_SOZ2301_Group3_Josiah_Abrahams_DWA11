//@ts-check
import { reducer } from "./reducer.js";

/**
 * @typedef {object} State
 * @prop {number} counterValue
 */

export const State = {};

/**
 * @callback GetState
 * @returns {State}
 */

/**
 * @callback Dispatch
 * @param {Action} action
 */

/**
 * @callback EmptyFN
 */

/**
 * @callback Subscription
 * @param {State} prev
 * @param {State} next
 */

/**
 * @type {Array<Subscription>}
 */
let subscribers = [];

/**
 * @type {Array<State>}
 */
const states = [
  {
    counterValue: 0,
  },
];

/**
 * will grab the newest state from the array states {@link states}
 * @returns {State}
 */
export const getState = () => {
  return Object.freeze({ ...states[0] });
};

export const dispatch = (action) => {
  const prev = getState();
  const next = reducer(prev, action);

  subscribers.forEach((item) => item(prev, next));
  states.unshift(next);
};

/**
 * will be the method that will show the changes of the arrat states  {@link states}
 * @param {Subscription} subscription
 */
export const subscribe = (subscription) => {
  subscribers.push(subscription);
  const handler = (item) => item !== subscription;
  const unsubscribe = () => {
    const newSubscribers = subscribers.filter(handler);
    subscribers = newSubscribers;
  };
  return unsubscribe;
};
