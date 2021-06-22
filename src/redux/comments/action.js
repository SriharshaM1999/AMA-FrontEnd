import {CREATE_COMMENT,DISPLAY_COMMENT} from './actionType';
import axios from 'axios';
import {fetching} from '../posts/action';

export const create_comment= function(){
    return {
        type:CREATE_COMMENT
    }
}

export const displayComments = function(comments){
    return {
        type: DISPLAY_COMMENT,
        payload:comments
    }
}



export const createComment=(content, postId, authKey) => {

   console.log("in action createComment ", content, postId, authKey);

        return (dispatch)=>{

                const bodyParameters={
                    content:content,
                    postId:postId,
                }

                const config = {
                    headers: { Authorization: `Bearer ${authKey}` }
                };
                
                
                axios.post('http://localhost:8000/api/v1/answer/create-answer',bodyParameters,config)
                .then((response)=>{
                    console.log(response);
                    dispatch(fetching());

                })
                .catch((err)=>{
                    console.log(err);
                })
        }

}