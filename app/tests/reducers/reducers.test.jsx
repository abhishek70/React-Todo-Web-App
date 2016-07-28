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
      var res = reducers.searchTextReducers(df(''),df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducers', () => {
    it('shoule toggle show completed ', () => {
      var action = {
        type : 'TOGGLE_SHOW_COMPLETED',
      };
      var res = reducers.showCompletedReducers(df(false),df(action));

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

  });
});
