import { combineReducers } from 'redux';
import stickyHeader from './stickyHeader';
import aws from './aws';

const rootReducer = combineReducers({
  stickyHeader,
  aws
});

export default rootReducer
