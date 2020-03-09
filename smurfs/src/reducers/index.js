import {ADD_SMURF, 
        DELETE_SMURF,
        FETCH_SMURF_SUCCESS, 
        FETCH_SMURF_LOADING,
        FETCH_SMURF_FAILURE,
        POST_SMURF_SUCCESS,
        POST_SMURF_LOADING,
        POST_SMURF_FAILURE} from './actions'

export const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: null,
}


//UPDATE_SMURF

//DELETE_SMURF

const smurfReducer = (state = initialState, action)=> {
    switch(action.type){
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isFetching: false
            }   
        case FETCH_SMURF_LOADING: 
            return{
                ...state, 
                isFetching: true    
            }
        
        case FETCH_SMURF_FAILURE: 
            return {    
                ...state,
                error: action.payload,
                isFetching: false
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isPosting: false
            }
        case POST_SMURF_LOADING:
            return {
                ...state,
                isPosting: true
            }
        case POST_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
        

    }
}

export default smurfReducer;