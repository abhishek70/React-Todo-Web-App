/**
 *
 * Filtering TodoList Module
 */

module.exports = {

  // Filtering TodoList based on Show Completed Checkbox and Search Text
  searchTodoList : function(todoList, showCompletedTodos, todoSearchText) {
    var filteredTodoList = todoList;

    // Filter by showCompletedTodos
    filteredTodoList = filteredTodoList.filter((todo) => {
      return (todo.completed === showCompletedTodos);
    });

    // Filter by todoSearchText
    filteredTodoList = filteredTodoList.filter((todoItem) => {
      var todoText = todoItem.text.toLowerCase();
      return todoSearchText.length === 0 || todoText.indexOf(todoSearchText) > -1;
    });

    // Finally sorting the todoList
    filteredTodoList.sort( (a, b) => {
      if(!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodoList;
  }
};
