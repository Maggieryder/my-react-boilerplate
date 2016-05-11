import React, {Component, PropTypes} from 'react'
import {Link, IndexLink} from 'react-router'

class Nav extends Component {

  render(){
    let activeStyle = {
      color: '#333'
    }
    return (
      <nav>
        <ul>
          <li><IndexLink to="/" activeClassName="active" activeStyle={activeStyle} >HOME</IndexLink></li>
          <li><Link to="users/1" activeClassName="active" activeStyle={activeStyle} >USERS</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav
