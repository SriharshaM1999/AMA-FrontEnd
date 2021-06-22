import axios from 'axios';
import {FETCH_TAGS, FETCH_TAGS_FAILURE, FETCH_TAGS_SUCCESS} from './actionType';
import {fetching} from '../users/action'

export const fetchTags= function(){
    return{
        type: FETCH_TAGS,
        loading:true,
        
    }
}

export const fetchTagsSuccess= function(users){
    return{
        type: FETCH_TAGS_SUCCESS,
        loading:true,
        payload:users
        
    }
}

export const fetchTagsFailure= function(errorMessage){
    return{
        type: FETCH_TAGS_FAILURE,
        loading:true,
        error:errorMessage
        
    }
}

export const fetchingTags = ()=>{
    return (dispatch)=>{

        dispatch(fetchTags);
        axios.get('http://localhost:8000/api/v1/tag/display')
        .then((response)=>{
            console.log("response from tags", response);
            console.log("size of the content", response.data.tags.length )
      
            dispatch(fetchTagsSuccess(response.data.tags))
        })
        .catch((error)=>{
            console.log(error);
            dispatch(fetchTagsFailure())
        })

    }
}