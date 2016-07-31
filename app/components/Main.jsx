/**
 *
 * Root Component
 */

var styles  = require('../styles/index');

import React from 'react';
import Nav   from 'Nav';


var Main = (props) => {
  return(
    <div style={styles.body}>
      <Nav/>
      {props.children}
    </div>
  )
}


module.exports = Main;
