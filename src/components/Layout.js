import React, { Component } from 'react';

class Layout extends Component {
  render() {
    let url = window.location.href
    if (url !== "http://localhost:3000/") {
      return (
    	    <nav>
    	    	<a href="/"><img className="homePageLogo" src="/images/logo.png" />hei</a>
    	    </nav>
        )
      } else {
        return (
          <nav>
          <a href="/"><img className="homePageLogo" src="/images/logo.png" />Hello</a>
          </nav>
        )
      }
  }
}

export default Layout;
