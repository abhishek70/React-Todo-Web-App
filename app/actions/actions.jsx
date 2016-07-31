/**
 *
 * Redux Action Generators
 */

import moment from 'moment';
import firebase, {firebaseRef,githubProvider} from 'app/firebase/';

// Set Search Text
// ----------------
export var setSearchText = (searchText) => {
  return {
    type : 'SET_SEARCH_TEXT',
    searchText
  };
};

// Toggle Show Completed
// ---------------------
export var toggleShowCompleted = () => {
  return {
    type : 'TOGGLE_SHOW_COMPLETED'
  };
};

// Toggle Todo
// ------------
export var updateTodo = (id, updates) => {
  return {
    type : 'UPDATE_TODO',
    id,
    updates
  };
};

// Toggle Todo using Firebase
// --------------------------
export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {

    var uid = getState().auth.uid;
    var todoRef   = firebaseRef.child(`users/${uid}/todos/${id}`);
    var updates = {
      completed,
      completedAt : completed ? moment().unix() : null
    };

    return todoRef.update(updates).then( () => {
      dispatch(updateTodo(id, updates));
    });

  };
};


// Add Todo
// ----------
export var addTodo = (todo) => {
  return {
    type  : 'ADD_TODO',
    todo
  };
};

// Add Todo to Firebase
// ---------------------
export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed   : false,
      createdAt   : moment().unix(),
      completedAt : null
    };

    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

    // Promises
    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id : todoRef.key
      }));
    });
  };
};



// Add Todo List to Local Storage
// -------------------------------
export var addTodos = (todos) => {
  return {
    type : 'ADD_TODOS',
    todos
  };
};

// Fetch Todos from firebase
// --------------------------
export var startAddTodos = () => {

  return (dispatch, getState) => {

    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`);

    return todoRef.once('value').then((snapshot) => {

      var todos = snapshot.val() || {};
      var parseTodos = [];

      Object.keys(todos).forEach((todoId) => {
        parseTodos.push({
          id : todoId,
          ...todos[todoId]
        })
      });

      dispatch(addTodos(parseTodos));
    });
  }
};

// Action for Login with Github
// ------------------------------
export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth Worked', result);
    }, (error) => {
      console.log('Error', error);
    });
  };
};


// Action for user logging out
// ------------------------------
export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged out!!!');
    });
  };
};


// Initiate login and return user id
// -----------------------------------
export var login = (uid) => {
  return {
    type : 'LOGIN',
    uid
  };
};


// Initiate logout and clean up the todos from store
// -------------------------------------------------
export var logout = () => {
  return {
    type : 'LOGOUT'
  };
};
