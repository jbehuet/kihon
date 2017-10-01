import { combineReducers } from 'redux';
import TechniquesReducer from './TechniquesReducer';

export default combineReducers({
  techniques: TechniquesReducer
})
