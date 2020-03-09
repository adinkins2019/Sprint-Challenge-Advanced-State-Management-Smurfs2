export const ADD_SMURF = "ADD_SMURF"
export const DELETE_SMURF = "DELETE SMURF"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_LOADING = "FETCH_SMURF_LOADING"
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCEss"
export const POST_SMURF_LOADING = "POST_SMURF_LOADING"
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE"
export const api = "http://localhost:3333/smurfs"

export function getAllSmurfs(){
    axios
    .get(api)
    .then(response => dispatch({type: FETCH_SMURF_SUCCESS, payload: response.data}))
    .catch(err => dispatch({type: FETCH_SMURF_FAILURE, payload: err}))
}

export const addNewSmurf = (smurf) => {
    axios
    .post(api, smurf)
    .then(response => dispatch({type: POST_SMURF_SUCCESS, }))
}