/**
 *
 * Main Todo App Component holds Todo Search, Todo List, Todo Filter
 */


var Container   = require('Container');

import React        from 'react';
import {connect}    from 'react-redux';

// Importing required components
import TodoList     from 'TodoList';
import AddTodo      from 'AddTodo';
import TodoSearch   from 'TodoSearch';

export var Todo = React.createClass({

  // Rending component
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

export default connect()(Todo);
