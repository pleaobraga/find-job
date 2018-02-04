
//setting enviroment variables
const hostname = window && window.location && window.location.hostname

let env = hostname === 'find-job-pleao.herokuapp.com' ? 'PROD' : 'DEV' 

export const URL_BASE = env === 'PROD' 
    ? 'https://job-server-pleao.herokuapp.com' 
    : 'http://localhost:3000'
