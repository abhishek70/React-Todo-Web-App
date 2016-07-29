/*
 * The Container for holding the content
 */

var React   = require('react');
var styles  = require('../styles/index.js');
import Nav from 'Nav';

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
