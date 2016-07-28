var React = require('react');
var Main  = require('Main');
var Todo  = require('Todo');

// Object Destructering
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var routes = (
 <Router history={hashHistory}>
 	<Route path='/' component={Main}>
    <IndexRoute component={Todo}/>
  </Route>
 </Router>
);

module.exports = routes;
