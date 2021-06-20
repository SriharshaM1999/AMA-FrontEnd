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

// export const fetching= (token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGNhNjk4ODk4YTE3NzJhODA2YWMwODUiLCJ1c2VybmFtZSI6ImFjY291bnQyIiwiZW1haWwiOiJhY2NvdW50MkBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImFjY291bnQyIiwibm9PZlF1ZXN0aW9ucyI6MCwibm9PZkFuc3dlcnMiOjAsImNyZWF0ZWRBdCI6IjIwMjEtMDYtMTZUMjE6MTM6NDQuOTEzWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDYtMTZUMjE6MTM6NDQuOTEzWiIsIl9fdiI6MCwiaWF0IjoxNjI0MTQwMzk0LCJleHAiOjE2MjQxNTAzOTR9.Yg9ATqTGxgOWiee4hsWAyjzcmq0-XfOSgGbf8cNkwvM")=>{

    
// console.log("fetching: I got called");
//     return (dispatch)=>{

      
//         axios.get('http://localhost:8000/api/v1/question/display-question')
//         .then((response)=>{
//             console.log("im in the response")
//             console.log(response);
//         })
//         .catch((error)=>console.log(error));
                    

         
//     }


//     // return (dispatch)=>{

//     //     dispatch(fetch_users);

//     //      axios.get('http://localhost:8000/api/v1/users/display')
//     //     .then((response)=>{
//     //         console.log("Fetch users successfully called")
//     //             console.log(response);
//     //             dispatch(fetch_users_success(response.data.users));
//     //     })
//     //     .catch((errorMessage)=>{
//     //         dispatch(fetch_users_failure(errorMessage));
//     //     })
        

//     // }

// }


