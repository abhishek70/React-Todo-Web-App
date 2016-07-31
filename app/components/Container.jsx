/**
 *
 * The Container for holding the content
 */

var styles  = require('../styles/index.js');

import React from 'react';
import Nav   from 'Nav';


var Container = React.createClass({

  // Rending component
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
    );
  }
});

module.exports = Container;
