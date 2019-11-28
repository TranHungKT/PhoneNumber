const {combineReducers} =require ('redux');
import {UPDATE_CONTACT,UPDATE_USER} from './action'

const DEFAULT_STATE = {user: {}, contacts: []}

const merge = (prev, next) => Object.assign({}, prev, next)

const contactReducer = (state = [], action) => {
  if (action.type === UPDATE_CONTACT) return [...state, action.payload]
  return state
}

const userReducer = (state = {}, action) => {
  if (action.type === UPDATE_USER) return merge(state, action.payload)
  if (action.type === UPDATE_CONTACT) return merge(state, {prevContact: action.payload})
  return state
}


const reducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
})

export default reducer
