// React and ReactDOM
var React       = require('react');
var ReactDOM    = require('react-dom');

// Redux Store
var actions     = require('actions');
var store       = require('configureStore').configure();
var {Provider}  = require('react-redux');

// Components
var Todo        = require('Todo');

// API for fetching and setting todoList in LocalStorage
var TodoAPI     = require('TodoAPI');

// Fetching todos from the firebase
store.dispatch(actions.startAddTodos());

// Render DOM
ReactDOM.render(
  <Provider store={store}>
    <Todo/>
  </Provider>,
  document.getElementById('app')
);
