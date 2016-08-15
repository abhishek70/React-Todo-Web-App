/**
 *
 * Test cases for Reducers
 */

var expect   = require('expect');

// Module for not allowing the func to change any data
var df       = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducers', () => {
    it('shoule set search text', () => {
      var action = {
        type : 'SET_SEARCH_TEXT',
        searchText : 'test'
      };
      var res = reducers.searchTextReducers('',action);

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducers', () => {
    it('shoule toggle show completed ', () => {
      var action = {
        type : 'TOGGLE_SHOW_COMPLETED',
      };
      var res = reducers.showCompletedReducers(false,action);

      expect(res).toEqual(true);
    });
  });

  describe('todosReducers', () => {
    it('shoule Add New Todo ', () => {
      var action = {
        type     : 'ADD_TODO',
        todo : {
          id        : 'abc123',
          text      : 'Test123',
          completed : false,
          createdAt : 200
        }
      };
      var res = reducers.todosReducers(df([]),df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should Update Toggle Todo ', () => {
      var todo = [{
        id        : 1234,
        text      : 'Something',
        completed : true,
        createdAt : 123,
        completedAt : 125
      }];
      var updates = {
        completed : false,
        completedAt : null
      };
      var action = {
        type : 'UPDATE_TODO',
        id   : todo[0].id,
        updates
      };
      var res = reducers.todosReducers(df(todo),df(action));
      expect(res.length).toEqual(1);
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todo[0].text);
    });

    it('shoule add existing todo list ', () => {
      var todos = [{
        id : '11111',
        text : 'Action Test',
        completed : false,
        completedAt : undefined,
        createdAt : 200
      }];
      var action = {
        type        : 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducers(df([]),df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should remove todos on logout ', () => {
      var todos = [{
        id : '11111',
        text : 'Action Test',
        completed : false,
        completedAt : undefined,
        createdAt : 200
      }];
      var action = {
        type        : 'LOGOUT',
      };
      var res = reducers.todosReducers(df(todos),df(action));
      expect(res.length).toEqual(0);
    });

  });

  describe('Auth Reducers', () => {

    it('should store UID on Login', () => {
      const action = {
        type : 'LOGIN',
        uid  : '123abc'
      };

      const res = reducers.authReducers(undefined, df(action));

      expect(res).toEqual({uid:action.uid});

    });

    it('should remove auth on Logout', () => {

      const data = {
        uid : '123abc',
      };

      const action = {
        type : 'LOGOUT'
      };

      const res = reducers.authReducers(df(data), df(action));

      expect(res).toEqual({});

    });

  });

});
