/*
 * TodoList Component for holding Todo Items
 */

var React     = require('react');
var {connect} = require('react-redux');

// API for setting and getting TodoList
var TodoAPI   = require('TodoAPI');

// Importing TodoItem Module
import TodoItem from 'TodoItem';

export var TodoList = React.createClass({

  render : function () {
    var {todos, searchText, showCompleted} = this.props;
    var renderTodoItems = () => {

      // Searching TodoList and return an array.
      var finalTodoList = TodoAPI.searchTodoList(todos, showCompleted, searchText);

      if(finalTodoList.length === 0) {
        return(
          <p className="default-text">No task pending...</p>
        );
      }

      // Setting Individual todoItem
      return finalTodoList.map((todoItem) => {

        return (
          <TodoItem key = {todoItem.id} {...todoItem}/>
        )

      });
    };

    // Final rendering
    return (
      <div className="col-md-6 col-md-offset-3 section-sep">
        {renderTodoItems()}
      </div>
    )
  }
});

// Setting up state using connect and returning all state properties
export default connect(
  (state) => {
    return state;
  }
)(TodoList);
