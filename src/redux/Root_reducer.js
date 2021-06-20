import {combineReducers} from 'redux';
import setAuthKeyReducer from './userAuthentication/reducer';
import userReducer from './users/reducer';
import postReducer from './posts/reducer';
const rootReducer = combineReducers({
    setAuthReducer:setAuthKeyReducer,
    userReducer:userReducer,
    postReducer:postReducer
})

export default rootReducer;