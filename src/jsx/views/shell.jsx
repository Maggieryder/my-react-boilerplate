import React, {Component, PropTypes} from 'react'

import Header from './header.jsx'
import Footer from './footer.jsx'

class Shell extends Component {
  render(){
    return (
      <div>
        <Header />
        <div id="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Shell
