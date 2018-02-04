
//setting enviroment variables
const hostname = window && window.location && window.location.hostname

let env = hostname === 'find-job-pleao.herokuapp.com' ? 'PROD' : 'DEV' 

export const URL_BASE = env === 'PROD' 
    ? 'http://localhost:3000' 
    : 'http://localhost:3000'
