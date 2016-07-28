/*
 * Todo Filter Component
 */

var React     = require('react');
var {connect} = require('react-redux');
var actions   = require('actions');

export var TodoSearch = React.createClass({

  // Rendering
  render: function() {

    var {dispatch, showCompletedTodos, todoSearchText} = this.props;
    return (
      <div className="col-md-6 col-md-offset-3 section-sep">
        <form>
          <div className="form-group">
            <input  type="text"
                    className="form-control"
                    onChange={()=>{
                      var searchText = this.refs.todoSearchText.value;
                      dispatch(actions.setSearchText(searchText));
                    }}
                    ref="todoSearchText"
                    value={todoSearchText}
                    placeholder="Search Todo"/>
          </div>
          <div className="checkbox">
            <label>
              <input  type="checkbox"
                      ref="showCompletedTodos"
                      checked={showCompletedTodos}
                      onChange={() => {
                        dispatch(actions.toggleShowCompleted());
                      }} />
                    <span className="search-chk-label"> Show completed todos</span>
            </label>
          </div>
        </form>
      </div>
      );
    }
  });

// Setting up state using connect and returning only required state properties
export default connect(
  (state) => {
    return {
      showCompletedTodos : state.showCompletedTodos,
      todoSearchText     : state.searchText
    }
  }
)(TodoSearch);
