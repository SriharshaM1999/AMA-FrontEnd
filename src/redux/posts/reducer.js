import { FETCH_POSTS,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILURE } from "./action.Type";

const initalState={
    loading:true,
    posts:[],
    error:''
};

const reducer=(state=initalState,action)=>{


    switch(action.type){

        case FETCH_POSTS: return{
            ...state,
             loading:true,
             
        }

        case FETCH_POSTS_SUCCESS: return{
            ...state,
            posts:action.payload,
            loading:false
        }

        case FETCH_POSTS_FAILURE: return{
            ...state,
            error:action.error,
            loading:false
        }

        default:return state;





    }


}



export default reducer