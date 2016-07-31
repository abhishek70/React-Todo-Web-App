/**
 *
 * Create Add Todo Form
 */

import React          from 'react';
import {connect}      from 'react-redux';
import {startAddTodo} from 'actions';

export var AddTodo = React.createClass({

  // Setting Initial State
  getInitialState: function() {
    return {
      errorState:null,
      todoText:'',
    }
  },

  // On Form Submit
  onSubmit: function (e) {
    e.preventDefault();

    var {dispatch}    = this.props;

    // setting field ele
    var todoTextField = this.refs.todoText;

    // Fetching ele value
    var todoText      = todoTextField.value;

    if(todoText.length > 0 ) {

      // Action dispatch for adding Todo to Firebase
      dispatch(startAddTodo(todoText));

      this.setState({
        errorState: null,
        todoText:''
      });

    } else {

      todoTextField.focus();
      this.setState({errorState: 'has-error'});
      return false;

    }
  },

  // On inpput change
  handleChange : function(e) {
    const length = e.target.value.length;

    if(length > 0) {
      this.setState({ errorState: 'has-success' });
    } else if(length <= 0) {
      this.setState({ errorState: 'has-error' });
    }

    this.setState({ todoText: e.target.value });
  },

  // Rendering the component
  render: function() {
    return (
      <div className="col-md-6 col-md-offset-3 section-sep padding-bottom">
        <form onSubmit={this.onSubmit}>
          <div className={`form-group ${this.state.errorState}`}>
            <input type="text"
                   value={this.state.todoText}
                   onChange={this.handleChange}
                   className="form-control"
                   ref="todoText"
                   placeholder="Enter task"/>
          </div>
          <button type="submit"
                  className="btn btn-primary btn-block">
                  Add Todo
          </button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
