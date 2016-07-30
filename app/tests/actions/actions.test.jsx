import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('shoule generate search text action', () => {
    var action = {
      type        : 'SET_SEARCH_TEXT',
      searchText  : 'Test'
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('shoule generate add todo action', () => {
    var action = {
      type        : 'ADD_TODO',
      todo : {
        id        : 'abc123',
        text      : 'Test123',
        completed : false,
        createdAt : 200
      }
    };
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('shoule add todolist to local storage', () => {
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
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('shoule generate toggle show completed action', () => {
    var action = {
      type        : 'TOGGLE_SHOW_COMPLETED',
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('shoule generate update todo action', () => {
    var action = {
      type        : 'UPDATE_TODO',
      id          : 3,
      updates     : {
        completed   : true,
        completedAt : 500
      }
    };

    var res = actions.updateTodo(action.id, action.updates);
    expect(res.id).toEqual(action.id);
  });

  it('should generate login action', () => {
    const action = {
      type : 'LOGIN',
      uid  : 'test1234'
    };

    const res = actions.login(action.uid);

    expect(res).toEqual(action);
  });

  it('should generate logout action', () => {
    const action = {
      type : 'LOGOUT'
    };

    const res = actions.logout();

    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    var testTodoRef;
    var todosRef;

    // beforeEach is executed before any tests
    beforeEach((done) => {
      todosRef = firebaseRef.child('todos');

      return todosRef.remove().then(() => {
        testTodoRef = todosRef.push();
        return testTodoRef.set({
          text      : 'Something to do',
          completed : false,
          createdAt : 2343534
        })
      })
      .then(() => done())
      .catch(done);
    });

    // afterEach is executed after any tests
    afterEach((done) => {
      todosRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done);
    });


    it('should populate todos and dispatch ADD_TODOS', (done) => {
      const store = createMockStore({});
      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual('Something to do');

        done();
      }, done)
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
      const store = createMockStore({});
      const todoText = 'My todo item';

      store.dispatch(actions.startAddTodo(todoText)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(actions[0].todo).toInclude({
          text: todoText
        });
        done();
      }).catch(done);
    });

  });
});
