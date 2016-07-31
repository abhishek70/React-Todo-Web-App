/**
 *
 * App entry point file
 */

// React and ReactDOM dependencies
import React    from 'react';
import ReactDOM from 'react-dom';

// Redux Store dependencies
import * as actions from 'actions';
var store       = require('configureStore').configure();
import {Provider} from 'react-redux';

// Router dependencies
import {hashHistory} from 'react-router';

// Firebase dependencies
import firebase      from 'app/firebase/';
import router        from 'app/router/'

firebase.auth().onAuthStateChanged( (user) => {

  //console.log('User', user);
  if(user) {

    store.dispatch(actions.login(user.uid));

    // Fetching todos for the loggged in users from the firebase
    store.dispatch(actions.startAddTodos());

    hashHistory.push('/todos');

  } else {

    store.dispatch(actions.logout());
    hashHistory.push('/');

  }
});





// Render DOM
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
