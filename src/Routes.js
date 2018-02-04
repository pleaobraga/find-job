import React from 'react'
import { BrowserRouter, Route, Switch, } from 'react-router-dom'
import AvaiableJobs from './pages/AvailableJobs/AvailableJobs'
import JobView from './pages/JobView/JobView'



const Routes = () => {
    return (
        <BrowserRouter >
          <div className="job" >
              <Switch>
                  <Route path="/:id" component={JobView} />
                  <Route path="/" component={AvaiableJobs} />
              </Switch>
          </div>
      </BrowserRouter>
    )
} 
    
export default Routes
