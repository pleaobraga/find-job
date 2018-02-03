
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import JobList from './components/JobList'
import AvaiableJobs from './pages/AvailableJobs'
import Reboot from 'material-ui/Reboot';
import 'typeface-roboto'
import rootReducers from './reducer';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk),
);

const store = createStore(rootReducers, enhancer);


ReactDOM.render(
  <Provider store={store} >
      <BrowserRouter >
          <div className="job" >
              <Switch>
                  <Route path="/" component={AvaiableJobs} />
                  <Route path="/:id" component={AvaiableJobs} />
              </Switch>
          </div>
      </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));