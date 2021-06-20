import {SET_AUTH_KEY} from './actionType';
import axios from 'axios'

export const setAuthKey=(key)=>{
        return {
            type:SET_AUTH_KEY,
            authKey:key
        }
}

export const fetchUser= (email,password)=>{
        
    return  (dispatch)=>{

        axios.post('http://localhost:8000/api/v1/users/create-session/', {
                email: email,
                password:password,
            })
            .then((response)=>{
                console.log(response);
                dispatch(setAuthKey(response.data.data.token));    
            })
            .catch((error)=>{
                console.log(error);
            })
            
        
      

    }
}


