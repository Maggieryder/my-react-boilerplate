import React, {Component} from 'react'

class Users extends Component {
  render(){
    return (
      <div>
        <h2>Users page</h2>
        {this.props.children}
      </div>
    );
  }
}

export default Users
