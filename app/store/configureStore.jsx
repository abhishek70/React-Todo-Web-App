/*
 * App Store Configuration combining reducers
 */

// * will put all properties on redux object as redux does not have default
import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchTextReducers, showCompletedReducers, todosReducers} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText    : searchTextReducers,
    showCompleted : showCompletedReducers,
    todos         : todosReducers,
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}
