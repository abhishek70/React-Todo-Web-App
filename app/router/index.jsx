// Object Destructering
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import React from 'react';
import firebase from 'app/firebase/';
import Login from 'Login';
import Todo from 'Todo';


var requireLogin = (nextState, replace, next) => {
  if(!firebase.auth().currentUser)
    replace('/');

  next();
};

var redirectIfUserLoggedIn = (nextState, replace, next) => {
  if(firebase.auth().currentUser)
    replace('/todos');

  next();
};

export default(
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="todos" component={Todo} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfUserLoggedIn}/>
   </Route>
  </Router>
)
