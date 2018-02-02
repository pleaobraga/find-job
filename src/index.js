
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import JobList from './components/JobList'
import Reboot from 'material-ui/Reboot';
import 'typeface-roboto'

//import reducers from './reducers';

const App = () => {
  //const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    // <Provider store={store}>
    //   <Routes />
    // </Provider>
    <div>
      <Reboot />
      <JobList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
