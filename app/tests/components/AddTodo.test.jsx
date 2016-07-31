/**
 *
 * Test cases for the Add Todo Form
 */
var expect    = require('expect');
var React     = require('react');
var ReactDOM  = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $         = require('jQuery');

import * as actions from 'actions';
var {AddTodo} = require('AddTodo');

describe('AddTodo Form', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dipatch action ADD_TODO if valid todotext is entered', () => {
    var simulateTodoText = 'Bring Folder'
    var action = actions.startAddTodo(simulateTodoText);
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.refs.todoText.value = simulateTodoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO if invalid todo entered', () => {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
