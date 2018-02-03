import * as constant from '../constants'
import { combineReducers } from 'redux'

const initialState = {
    fetching: false,
    jobs: [],
    error: false,
    job: {}

}

function jobs (state = initialState, actions) {
    switch(actions.type) {
        case constant.GET_JOB:
        case constant.GET_ALL_JOBS: 

            return { ...state, fetching: true }

        case constant.GET_ALL_JOBS_SUCCESS:

            return { 
                ...state, 
                fetching: false, 
                jobs: actions.jobs
            }
        
        case constant.GET_JOB_ERROR:
        case constant.GET_ALL_JOBS_ERROR:

            return { 
                ...state, 
                fetching: false, 
                error: true, 
                message: actions.error
            }

        case constant.GET_JOB_SUCCESS:

        return { 
            ...state, 
            fetching: false, 
            job: actions.job
        }

        default: 
            return state
    }
}

export default combineReducers({ jobs })