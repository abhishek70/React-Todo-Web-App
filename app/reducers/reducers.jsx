// Utility
var uuid    = require('node-uuid');
var moment  = require('moment');

// Search Text Reducers
// ---------------------
export var searchTextReducers = (state = '',action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
      break;
    default:
      return state;
  };
};

// Show Completed Reducers
// -------------------------
export var showCompletedReducers = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
      break;
    default:
      return state;
  };
};


// Todos Reducers
// ------------------
export var todosReducers = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
      break;
    case 'UPDATE_TODO':
      return state.map((todo) => {
        if(todo.id === action.id) {
          return {
            ...todo,
            ...action.updates
          };
        } else {
          return todo;
        }
      });
      break;

    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
      break;

    default:
      return state;
  };
};
