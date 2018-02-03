import * as constant from '../constants'
import { combineReducers } from 'redux'

const initialState = {
    fetching: false,
    jobs: [],
    error: false
}

function jobs (state = initialState, actions) {
    switch(actions.type) {
        case constant.GET_ALL_JOBS: 

            return { ...state, fetching: true }

        case constant.GET_ALL_JOBS_SUCCESS:

            return { 
                ...state, 
                fetching: false, 
                jobs: actions.jobs
            }
 
        case constant.GET_ALL_JOBS_ERROR:

            return { 
                ...state, 
                fetching: false, 
                error: true, 
                message: actions.error
            }

        default: 
            return state
    }
}

export default combineReducers({ jobs })