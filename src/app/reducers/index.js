import { combineReducers } from 'redux';
import MovementsReducer from './MovementsReducer';

export default combineReducers({
  movements: MovementsReducer,
});
