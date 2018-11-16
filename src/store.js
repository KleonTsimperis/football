import {createStore, combineReducers} from 'redux';
import mainReducer from './reducers/reducers'

const rootReducer = combineReducers({mainReducer});


const store = createStore(rootReducer);

export default store;
