import React, { Component } from 'react';

class Item extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {test: "test"};
  // }

  render(){
    return (
      <li>{this.props.text}</li>
    );
  }
};

export default Item;
