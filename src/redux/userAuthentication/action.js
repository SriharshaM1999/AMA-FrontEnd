import {SET_AUTH_KEY} from './actionType';
import axios from 'axios';
import cookie from 'react-cookies'
 

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
                console.log("the response" ,response);
                console.log("seted in cookies is: ", response.data.data.token)
                cookie.save('userId', response.data.data.token , { path: '/' })

                dispatch(setAuthKey(response.data.data.token));    
            })
            .catch((error)=>{
                console.log(error);
            })
            
        
      

    }
}


