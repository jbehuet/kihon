import { combineReducers } from 'redux';
import techniquesReducer from './techniquesReducer';

export default combineReducers({
  techniques: techniquesReducer
})
