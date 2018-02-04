
import * as constant from '../constants'
import * as api from '../Utils/apiUtils'

//-----------jobs------------

// action creators

/**
 * plain object which starts the jobs request  
 * 
 */
const getAllJobsInit = () => ({
    type: constant.GET_ALL_JOBS, 
})

/**
 * plain object which contains a jobs array 
 * 
 * @param {any} jobs 
 */
const getAllJobsSuccess = jobs => ({
    type: constant.GET_ALL_JOBS_SUCCESS, 
    jobs
})


/**
 * plain object which contains a error message
 * from get all jobs
 * 
 * @param {any} error 
 */
const getAllJobsError = error => ({
    type: constant.GET_ALL_JOBS_ERROR, 
    error
})

/**
 * plain object which starts the job request  
 * 
 */
const getJobInit = () => ({
    type: constant.GET_JOB, 
})


/**
 * plain object which contains a single job 
 * 
 * @param {object} job 
 */
const getJobSuccess = job => ({
    type: constant.GET_JOB_SUCCESS, 
    job
})


/**
 * plain object which contains a error message
 * from get job
 * 
 * @param {string} error 
 */
const getJobError = error => ({
    type: constant.GET_JOB_ERROR, 
    error
})


// bound action creator

/**
 * function get all jobs from Api
 * and send it to reducer
 * 
 */
export const getAllJobs = () => dispatch => {
    dispatch(getAllJobsInit())

    return api.getAllJobs()
        .then(response => {
            setTimeout( () => {
                dispatch(getAllJobsSuccess(response.data))
            },1000)
        })
        .catch( error => dispatch(getAllJobsError(error)))
}


/**
 * function get A single job from Api
 * and send it to reducer
 * 
 * @param {integer} id 
 */
export const getJob = (id) => dispatch => {
    dispatch(getJobInit())

    return api.getJob(id)
        .then(response => {
            setTimeout( () => {
                dispatch(getJobSuccess(response.data))
            },1000)
        })
        .catch( error => dispatch(getJobError(error)))
}