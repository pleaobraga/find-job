import axios from 'axios'
import { URL_BASE } from '../constants'

//jobs Requests

/**
 * function whitch get all jobs from Api
 * 
 * @returns promisse
 */
export const getAllJobs = () => {
    return axios.get(`${URL_BASE}/jobs`)
}


/**
 * function whitch get a job from Api
 * 
 * @param {integer} id 
 * @returns 
 */
export const getJob = (id) => {
    return axios.get(`${URL_BASE}/jobs/${id}`)
}