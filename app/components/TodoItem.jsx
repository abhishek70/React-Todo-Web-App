/*
 * Renders Single Todo Item
 */

var React     = require('react');

var {connect} = require('react-redux');
var actions   = require('actions');

// Utility
var moment = require('moment');


export var TodoItem = React.createClass({

  handleChecked : function(e){
    var {id, completed} = this.props;
    var dispatch = this.props.dispatch;
    //this.props.onToggle(id);
    dispatch(actions.startToggleTodo(id, !completed));
  },

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
        <label>
          <input  type="checkbox"
                  onChange={this.handleChecked}
                  checked={completed} />{formattedTodoText()}
        </label>
        <br/>
        <div className="display-date">{displayDate()}</div>
      </div>
    )
  }
});

export default connect()(TodoItem);
