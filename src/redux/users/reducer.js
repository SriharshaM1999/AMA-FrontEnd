import {SET_AUTH_KEY} from './actionType'

const initalState={
    authkey:'',
}


const setAuthKeyReducer =(state=initalState, action)=>{

    console.log("reducer got called");

    switch(action.type){

        case SET_AUTH_KEY: return {
            ...state,
            authKey:action.authKey
        }

        default: return state;



    }
    


}


export default setAuthKeyReducer;