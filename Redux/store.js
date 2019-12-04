// action types
const {createStore} = require('redux')

import reducer from './reducer'

import {addContact} from  './action'

const store = createStore(reducer)
/*store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'baz'}))
*/
store.dispatch(addContact({name: 'jordan h', phone: '1234567890'}))
store.dispatch(addContact({name: 'jordan h', phone: '1234567890'}))
store.dispatch(addContact({name: 'david m', phone: '5050505050'}))


export default store