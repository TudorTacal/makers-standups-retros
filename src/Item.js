import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicks: 0
    };
    this.onPlusClick = this.onPlusClick.bind(this);
  }
  onPlusClick(event) {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }
  render(){
    let image = <img src="/images/plus.png" onClick={this.onPlusClick} alt="Plus" height="20" width="20"/>
    return (
      <li className="item" >{this.props.text}{image}{this.state.clicks}</li>
    );
  }
};

export default Item;
