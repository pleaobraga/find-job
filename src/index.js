
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import JobList from './components/JobList'
//import reducers from './reducers';

const App = () => {
  //const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    // <Provider store={store}>
    //   <Routes />
    // </Provider>
    <MuiThemeProvider>
         <JobList />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
