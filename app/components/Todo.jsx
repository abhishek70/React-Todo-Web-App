/*
 * Main Todo App Component holds Todo Search, Todo List,Todo Filter
 */
var React       = require('react');

// Container
var Container   = require('Container');

// Importing required components
import TodoList from 'TodoList';
import AddTodo  from 'AddTodo';
import TodoSearch from 'TodoSearch';

var Todo = React.createClass({
  render: function() {
    return(
      <Container>
        <div className="col-md-6 col-md-offset-3 text-center">
          <h1>Todo</h1>
        </div>
          <TodoSearch/>
          <TodoList/>
          <AddTodo/>
      </Container>
    );
  }
});

module.exports = Todo;
