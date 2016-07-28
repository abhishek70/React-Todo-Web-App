/*
 * The Container for holding the content
 */

var React   = require('react');
var styles  = require('../styles/index.js');
var Nav     = require('Nav')

var Container = React.createClass({

  render:function(){
    return(
      <div>
        <Nav/>
        <div className="container">
          <div style={styles.starterTemplate}>
            {this.props.children}
          </div>
        </div>
      </div>

    )
  }
});

module.exports = Container;
