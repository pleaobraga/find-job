
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, } from 'react-router-dom'
import ReduxThunk from 'redux-thunk';
import AvaiableJobs from './pages/AvailableJobs'
import JobView from './pages/JobView'
import Reboot from 'material-ui/Reboot'
import 'typeface-roboto'
import rootReducers from './reducer'
import 'babel-polyfill'
import ReactSEO from 'react-seo'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(ReduxThunk),
);

const store = createStore(rootReducers, enhancer)


function ajaxFunction(param,resolve){
	axios.get(`https://job-server-pleao.herokuapp.com/jobs`)
		.then((response)=>{
			// do stuff
			this.emit('find-job');
			if (resolve) // IMPORTANT! call resolve only if it was passed.
				resolve();
			});


ReactSEO.startMagic([{url:'/',isFullMatch:false,
      ajaxFunction:getAllJobs,urlParams:[]}],renderDOM);


function renderDOM(){
    ReactDOM.render(
      <BrowserRouter basename='/' >
        <div>
          <Route path = '/' component={Page1} />
          <Route path='/products/:id' component={Page2} />
          </div>
      </BrowserRouter>
      ,app);
      }

ReactDOM.render(
  <Provider store={store} >
      <BrowserRouter >
          <div className="job" >
              <Switch>
                  <Route path="/:id" component={JobView} />
                  <Route path="/" component={AvaiableJobs} />
              </Switch>
          </div>
      </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));