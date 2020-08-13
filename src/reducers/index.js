import {combineReducers} from 'redux'
import {titleReducer} from './titleReducer'
import {imageReducer} from './imageReducer'
import {termReducer} from './termReducer'

export default combineReducers({
  title: titleReducer,
  images: imageReducer,
  term: termReducer
});