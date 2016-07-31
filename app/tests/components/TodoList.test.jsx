/**
 *
 * Test cases for the Todo List
 */

var React         = require('react');
var ReactDOM      = require('react-dom');
var expect        = require('expect');
var TestUtils     = require('react-addons-test-utils');
var $             = require('jquery');
var {Provider}    = require('react-redux');
import {configure} from 'configureStore'
import ConnectedTodoList, {TodoList} from 'TodoList'
import ConnectedTodoItem, {TodoItem} from 'TodoItem'

describe('TodoList', () => {
  it('should TodoList exist', () => {
    expect(TodoList).toExist();
  });

  it('should render a todo component for each todo', () => {
    var todos = [
      {
        id:1,
        text:'Test 1',
        completed:false,
        completedAt:undefined,
        createdAt:500
      },
      {
        id:2,
        text:'Test 2',
        completed:false,
        completedAt:undefined,
        createdAt:500
      }];

    var store = configure({
      todos
    });

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );

    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponent = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodoItem);

    expect(todosComponent.length).toBe(todos.length);

  });
});
