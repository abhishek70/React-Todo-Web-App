/*
 * Create Add Todo Form
 */

var React     = require('react');
var {connect} = require('react-redux');
var actions   = require('actions');

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
    var todoTextField = this.refs.todoText;
    var todoText      = todoTextField.value;
    if(todoText.length > 0 ) {
      //this.props.onAddTodo(todoText);
      // Action dispatch for adding Todo to Firebase
      dispatch(actions.startAddTodo(todoText));
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

  handleChange : function(e) {
    const length = e.target.value.length;

    if(length > 0) {
      this.setState({ errorState: 'has-success' });
    } else if(length <= 0) {
      this.setState({ errorState: 'has-error' });
    }

    this.setState({ todoText: e.target.value });
  },

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
