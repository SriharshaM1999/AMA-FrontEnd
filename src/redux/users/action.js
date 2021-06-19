import {SET_AUTH_KEY} from './actionType';

export const setAuthKey=(key)=>{
        return {
            type:SET_AUTH_KEY,
            authKey:key
        }
}
