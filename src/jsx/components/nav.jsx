import React from 'react'
import {Link, IndexLink} from 'react-router'

let Nav = () => {
  let activeStyle = {
    color: '#333',
    textDecoration: 'none'
  }
  return (
    <nav>
      <ul>
        <li><IndexLink to="/" activeClassName="active" activeStyle={activeStyle} >HOME</IndexLink></li>
        <li><Link to="users/1" activeClassName="active" activeStyle={activeStyle} >USERS</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
