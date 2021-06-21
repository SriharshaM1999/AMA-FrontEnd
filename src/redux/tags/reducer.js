import {FETCH_TAGS, FETCH_TAGS_FAILURE, FETCH_TAGS_SUCCESS} from './actionType';

const initalState={
    loading:false,
    tags:[],
    error:''
}


const reducer =(state = initalState, action)=>{


        switch(action.type){


                case FETCH_TAGS: return{
                    ...state,
                    loading:true
                }


                case FETCH_TAGS_SUCCESS: return{
                    ...state,
                    loading:false,
                    tags:action.payload
                }



                case FETCH_TAGS_FAILURE: return{
                    ...state,
                    loading:false,
                    error:action.message
                }

                default : return state;
        }

}


export default reducer;