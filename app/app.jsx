// React and ReactDOM
var React       = require('react');
var ReactDOM    = require('react-dom');

// Redux Store
var actions     = require('actions');
var store       = require('configureStore').configure();
var {Provider}  = require('react-redux');


// Object Destructering
var {hashHistory} = require('react-router');

import firebase from 'app/firebase/';
import router from 'app/router/'

firebase.auth().onAuthStateChanged( (user) => {

  console.log('User', user);
  if(user) {

    store.dispatch(actions.login(user.uid));

    hashHistory.push('/todos');

  } else {

    store.dispatch(actions.logout());
    hashHistory.push('/');

  }
});



// Fetching todos from the firebase
store.dispatch(actions.startAddTodos());

// Render DOM
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
