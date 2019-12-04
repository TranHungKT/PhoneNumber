const merge = (prev,next) => Object.assign({},prev,next)

const reducer = (state,update) => merge(state, update)

let state={}
let action = []
state = reducer(state, {foo: 'foo'})
state = reducer(state, {bar: 'bar'})
state = reducer(state, {foo: 'baz'})
action = reducer({name: 'jordan h', number: '1234567890'},action)
state = reducer(state,action)
