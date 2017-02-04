import React, { Component } from 'react';
import io from 'socket.io-client';

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicks: 0
    };
    this.updatePlusClick = this.updatePlusClick.bind(this);
    this.notifyServer = this.notifyServer.bind(this);
  }

  componentDidMount(){
    this.socket = io('/');
    this.socket.on('update counter', data => {
      if(data.item === this.props.id ){
        this.updatePlusClick();
      };
    });
  };

  notifyServer(){
    this.socket.emit('counter event', { item: this.props.id });
    this.updatePlusClick();
  };

  updatePlusClick(event) {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }


  render() {
    let image = <img src="/images/plus.png" onClick={this.notifyServer.bind(this)} alt="Plus" height="20" width="20"/>
    return <li className="item" >{this.props.text}{image}{this.state.clicks}</li>
  }
};

export default Item;
