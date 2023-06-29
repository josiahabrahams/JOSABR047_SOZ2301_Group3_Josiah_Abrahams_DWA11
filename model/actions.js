// @ts-check

/**
 * adds 1 to the  State counterValue thatis in the store.js file
 * @callBack AddToCounter
 * @returns {object}
 */

export const addToCounter = () => ({ type: "ADD" });
/**
 * subtracts 1 from the  State counterValue thatis in the store.js file
 * @callBack SubtractFromCounter
 * @returns {object}
 */
export const subtractFromCounter = () => ({ type: "SUBTRACT" });
/**
 * resets State counterValue that is in the store.js file
 * @callBack ResetCounter
 * @returns {object}
 */
export const resetCounter = () => ({ type: "RESET" });
