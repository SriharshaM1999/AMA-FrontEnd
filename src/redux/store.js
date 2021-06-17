import {createStore} from 'redux';
import setAuthKeyReducer from './users/reducer';

const store = createStore(setAuthKeyReducer);

export default store;