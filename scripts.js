//@ts-check
import {subscribe, dispatch, getState } from "./model/store.js"
import {addToCounter, resetCounter, subtractFromCounter } from "./model/actions.js"

console.log(getState())

subscribe((_, next) => console.log(next)) 
dispatch(addToCounter())
dispatch(addToCounter())

dispatch(addToCounter())
dispatch(addToCounter())
dispatch(resetCounter())
dispatch(subtractFromCounter())
dispatch(subtractFromCounter())



