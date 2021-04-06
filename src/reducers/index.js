import counterReducer from './counter'
import loggedReduer from './isLogged'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReduer
})

export default allReducers;