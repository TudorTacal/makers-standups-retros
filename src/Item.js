import React, { Component } from 'react';

class Item extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {test: "test"};
  // }

  render(){
    return (
      <p>{this.props.text}</p>
    );
  }
};

export default Item;
