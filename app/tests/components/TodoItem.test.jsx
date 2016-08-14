/**
 *
 * Test cases for the Todo Items
 */

var React       = require('react');
var ReactDOM    = require('react-dom');
var expect      = require('expect');
var TestUtils   = require('react-addons-test-utils');
var $           = require('jquery');

import * as actions from 'actions';
import {TodoItem} from 'TodoItem';

describe('TodoItem', () => {
  it('should TodoItem exist', () => {
    expect(TodoItem).toExist();
  });

  it('should dispatch TOGGLE_TODO action onClick', () => {
    var data = {
      id        : '5',
      text      : "Testing Features",
      completed : true
    };

    var action = actions.startToggleTodo(data.id, !data.completed);

    var spy = expect.createSpy();

    var todoItm = TestUtils.renderIntoDocument(<TodoItem key={data.id} {...data} dispatch={spy} />);

    var $el = $(ReactDOM.findDOMNode(todoItm));

    TestUtils.Simulate.change($el.find('input[type=checkbox]')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

});
