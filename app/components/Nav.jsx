/*
 * Nav Component
 */
var React             = require('react');
var styles            = require('../styles/index');
var {Link, IndexLink} = require('react-router');

// Using Arrow Function Notation (Stateless Components)
var Nav = (props) => {
  return(
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Todo App</a>
        </div>
      </div>
    </nav>
  )
}

module.exports = Nav;
