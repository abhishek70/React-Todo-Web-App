import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';
var Container = require('Container');

export var Login = React.createClass({
  onLogin : function() {
    var {dispatch} = this.props;
    dispatch(actions.startLogin());
  },
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

export default Redux.connect()(Login);
