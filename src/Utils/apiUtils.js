import axios from 'axios'
import { URL_BASE } from '../constants'

//jobs Requests
export const getAllJobs = () => {
    return axios.get(`${URL_BASE}/jobs`)
}

export const getJob = (id) => {
    return axios.get(`${URL_BASE}/jobs/${id}`)
}