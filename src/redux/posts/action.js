import axios from "axios";
import { FETCH_POSTS,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILURE } from "./action.Type";



export const fetchPosts = function(){
    return {
        type:FETCH_POSTS
    }
}

export const fetchPostsSuccess = function(posts){
    return {
        type:FETCH_POSTS_SUCCESS,
        payload:posts
    }
}

export const fetchPostsFailure = function(errorMessage){
    return {
        type:FETCH_POSTS_FAILURE,
        error:errorMessage
    }
}

export const fetching=  ()=>{

    console.log("middlemain fetching got called")

    return (dispatch)=>{

        console.log("return(dispatch) middle main got called")

        dispatch(fetchPosts());

         axios.get('http://localhost:8000/api/v1/question/display-question')
        .then((response)=>{
            console.log("Fetch posts successfully called")
                console.log(response.data);
                console.log(response.data.Questions);
                dispatch(fetchPostsSuccess(response.data.Questions));
        })
        .catch((errorMessage)=>{
            dispatch(fetchPostsFailure(errorMessage));
        })
        

    }


}

export const createPost=(data, tagname, authKey) => {

    console.log("in action createPost ", data, tagname, authKey);

        return (dispatch)=>{

                const bodyParameters={
                    content:data,
                    tagname:tagname,
                    username:'me'
                }

                const config = {
                    headers: { Authorization: `Bearer ${authKey}` }
                };
                
                
                axios.post('http://localhost:8000/api/v1/question/create-question',bodyParameters,config)
                .then((response)=>{
                    console.log(response);
                    dispatch(fetching());
                })
                .catch((err)=>{
                    console.log(err);
                })
        }

}



