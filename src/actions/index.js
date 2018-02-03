
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

const getJobInit = () => ({
    type: constant.GET_JOB, 
})

const getJobSuccess = job => ({
    type: constant.GET_JOB_SUCCESS, 
    job
})

const getJobError = error => ({
    type: constant.GET_JOB_ERROR, 
    error
})


// bound action creator
export const getAllJobs = () => dispatch => {
    dispatch(getAllJobsInit())

    return api.getAllJobs()
        .then(response => {
            setTimeout( () => {
                dispatch(getAllJobsSuccess(response.data))
                return response
            },1000)
        })
        .catch( error => dispatch(getAllJobsError(error)))
}

export const getJob = (id) => dispatch => {
    dispatch(getJobInit())

    return api.getJob(id)
        .then(response => {
            setTimeout( () => {
                dispatch(getJobSuccess(response.data))
                return response
            },1000)
        })
        .catch( error => dispatch(getJobsError(error)))
}