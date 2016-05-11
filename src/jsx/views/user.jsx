import React, {Component} from 'react'

class User extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <h2>User {this.props.params.id}</h2>
    );
  }
}

export default User
