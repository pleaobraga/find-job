
import * as constant from '../constants'
import * as api from '../Utils/apiUtils'

//-----------jobs------------

// action creators
const getAllJobsInit = () => ({
    type: constant.GET_ALL_JOBS, 
})

const getAllJobsSuccess = jobs => ({
    type: constant.GET_ALL_JOBS_SUCCESS, 
    jobs
})

const getAllJobsError = error => ({
    type: constant.GET_ALL_JOBS_ERROR, 
    error
})

// bound action creator
export const getAllJobs = () => dispatch => {
    dispatch(getAllJobsInit())

    return api.getAllJobs()
        .then(response => {
            dispatch(getAllJobsSuccess(response.data))
            return response;
        })
        .catch( error => dispatch(getAllJobsError(error)))
}