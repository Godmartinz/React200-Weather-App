import { combineReducers } from 'redux';
import SearchBarReducer from './components/searchBar/searchBarReducer.js';


const rootReducer = combineReducers({
// add reducers
 search: SearchBarReducer,
});

export default rootReducer;
