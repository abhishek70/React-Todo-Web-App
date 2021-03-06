/**
 *
 * Login component
 */

var Container = require('Container');

import React        from 'react';
import {connect}    from 'react-redux';
import {startLogin} from 'actions';


export var Login = React.createClass({

  // Call startLogin action
  onLogin : function() {
    var {dispatch} = this.props;
    dispatch(startLogin());
  },

  // Rendering component
  render: function() {
    return (
      <div className="col-md-6 col-md-offset-3 text-center">
        <div className="panel panel-default">
          <div className="panel-body">
            <h1>Todo App</h1>
            <p className="lead">Login with your Github account</p>
            <button className="btn btn-primary" onClick={this.onLogin}>Login with Github</button>
          </div>
        </div>
      </div>
    );
  }
})

export default connect()(Login);
