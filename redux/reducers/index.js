import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'
import user from './users'
export default combineReducers({
  todos,
  counter,
  user
});