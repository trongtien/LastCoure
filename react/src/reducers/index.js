import { combineReducers } from 'redux'

import loginReducer from './loginReducer'
import helperReducer from './helperReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  helperReducer: helperReducer,
  productReducer: productReducer
})
export default rootReducer