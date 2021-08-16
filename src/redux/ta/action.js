import { UPDATE_STATUS } from "./actionType";


export const updateStatus= function(){
    return{
        type: UPDATE_STATUS,
        loading:true,
        
    }
}

