/**
 *
 * Nav Component
 */

var styles            = require('../styles/index');
var {Link, IndexLink} = require('react-router');

import React         from 'react';
import {connect}     from 'react-redux';
import {startLogout} from 'actions';

// Using Arrow Function Notation (Stateless Components)
export var Nav = React.createClass({
  onLogout : function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    dispatch(startLogout());
  },
  render:function(){
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Todo App</a>
          </div>
          <div className="navbar-form navbar-right">
            <a href="#" onClick={this.onLogout} className="btn btn-danger">Logout</a>
          </div>
        </div>
      </nav>
    )
  }
})

export default connect()(Nav);
