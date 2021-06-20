import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS } from "./actionType";

const initalState ={
    loading : true,
    users:[],
    error:''
}


const reducer =(state = initalState, action)=>{

switch(action.type){

    case FETCH_USERS: 
        
    return {
        ...state,
        loading:true,

        }

    case FETCH_USERS_SUCCESS: return{
        ...state,
        loading:false,
        users:action.payload,

    }  
    
    case FETCH_USERS_FAILURE: return{
        ...state,
        loading:false,
        error:action.error
    }



        default: return state;


    }
}


export default reducer;