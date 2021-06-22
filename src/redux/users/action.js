import axios from "axios";
import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS } from "./actionType";

export const fetch_users= function(){
    return {
            type:FETCH_USERS,

    }
}

export const fetch_users_success = function(users){
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users,
    }
}

export const fetch_users_failure = function(message){
    return{
        type:FETCH_USERS_FAILURE,
        error:message
    }
}


// code for redux thunk;
export const fetchingUsers=  ()=>{

    return (dispatch)=>{

        dispatch(fetch_users);

         axios.get('http://localhost:8000/api/v1/users/display')
        .then((response)=>{
            console.log("Fetch users successfully called")
                console.log(response);
                dispatch(fetch_users_success(response.data.users));
        })
        .catch((errorMessage)=>{
            dispatch(fetch_users_failure(errorMessage));
        })
        

    }


}


