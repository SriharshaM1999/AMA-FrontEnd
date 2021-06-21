import {combineReducers} from 'redux';
import setAuthKeyReducer from './userAuthentication/reducer';
import userReducer from './users/reducer';
import postReducer from './posts/reducer';
import tagsReducer from './tags/reducer';
const rootReducer = combineReducers({
    setAuthReducer:setAuthKeyReducer,
    userReducer:userReducer,
    postReducer:postReducer,
    tagReducer:tagsReducer
})

export default rootReducer;