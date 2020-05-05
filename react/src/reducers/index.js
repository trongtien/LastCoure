import { combineReducers } from 'redux'

import loginReducer from './loginReducer'
import helperReducer from './helperReducer'

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  helperReducer: helperReducer
})
export default rootReducer