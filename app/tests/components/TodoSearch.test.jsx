/*
 * Test cases for the TodoSearch
 */
var expect      = require('expect');
var React       = require('react');
var ReactDOM    = require('react-dom');
var TestUtils   = require('react-addons-test-utils');
var $           = require('jQuery');

import {TodoSearch} from 'TodoSearch'

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT action', () => {
    var searchText = 'Walk';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.todoSearchText.value = searchText;

    var action = {
      type : 'SET_SEARCH_TEXT',
      searchText
    };

    TestUtils.Simulate.change(todoSearch.refs.todoSearchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch SHOW_COMPLETED_TODOS', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.showCompletedTodos.checked = true;

    var action = {
      type : 'TOGGLE_SHOW_COMPLETED'
    }

    TestUtils.Simulate.change(todoSearch.refs.showCompletedTodos);

    expect(spy).toHaveBeenCalledWith(action);
  });

});
