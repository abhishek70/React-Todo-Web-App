/*
 * Test cases for the Todo Container
 */

var React     = require('react');
var ReactDOM  = require('react-dom');
var expect    = require('expect');
var TestUtils = require('react-addons-test-utils');
var $         = require('jquery');

var uuid      = require('node-uuid');
var {Provider}= require('react-redux');
var configureStore = require('configureStore');
var Todo      = require('Todo');
import TodoList from 'TodoList'

describe('Todo', () => {
  it('should Todo exist', () => {
    expect(Todo).toExist();
  });

  it('should render todolist', () => {
    var store    = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Todo/>
      </Provider>
    );
    var todo = TestUtils.scryRenderedComponentsWithType(provider, Todo)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todo, TodoList);
    expect(todoList.length).toEqual(1);
  });
});
