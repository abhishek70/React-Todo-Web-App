/**
 *
 * Renders Single Todo Item
 */

 // Utility
 var moment = require('moment');

import React              from 'react';
import {connect}          from 'react-redux';
import {startToggleTodo, startRemoveTodo}  from 'actions';


export var TodoItem = React.createClass({

  // Call startToggleTodo Action to mark it as completed
  handleChecked : function(e){
    var {id, completed} = this.props;
    var dispatch = this.props.dispatch;
    dispatch(startToggleTodo(id, !completed));
  },

  // Rendering component
  render : function () {
    var {id,text,completed, createdAt, completedAt, dispatch} = this.props;

    // Func for setting up date format depending on todo status
    var displayDate = () => {
      var msg       = 'Created ';
      var timestamp = createdAt;

      if(completed) {
        msg       = 'Completed ';
        timestamp = completedAt;
      }
      var formattedTime = msg + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
      return formattedTime;
    }

    var formattedTodoText = () => {
      return completed ? <s>{text}</s> : text;
    }

    return (
      <div className="checkbox todo-item-block">
        <div className="col-md-12">
          <div className="col-md-11">
            <label>
              <input  type="checkbox"
                      onChange={this.handleChecked}
                      checked={completed} />{formattedTodoText()}
            </label>
          </div>
          <div className="col-md-1">
            <span className="glyphicon glyphicon-remove"
              aria-hidden="true"
              onClick={() => {
                dispatch(startRemoveTodo(id));
              }}>

            </span>
          </div>
        </div>
        <br/>
          <div className="col-md-12">
            <div className="col-md-10">
              <div className="display-date">{displayDate()}</div>
            </div>
          </div>
      </div>
    )
  }
});

export default connect()(TodoItem);
