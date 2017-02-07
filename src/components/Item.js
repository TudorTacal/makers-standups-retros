import React, { Component } from 'react';
import io from 'socket.io-client';
import axios from 'axios'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicks: 0
    };
    this.updatePlusClick = this.updatePlusClick.bind(this);
    this.notifyServer = this.notifyServer.bind(this);
    this.axiosGet = this.axiosGet.bind(this);
  }

  componentDidMount(){
    var _this = this
    this.socket = io('/');
    this.socket.on('update counter', data => {
      if (data.item === this.props.id) this.updatePlusClick(this.state.clicks);
    });
    this.axiosGet();
  };

  axiosGet() {
    var _this = this
    axios.get('/items').then(res =>{
      res.data.forEach(function(item){
        if (item.itemId === _this.props.id) _this.updatePlusClick(item.clicks)
      })
    });
  }

  notifyServer(){
    this.socket.emit('counter event', { item: this.props.id });
    this.updatePlusClick(this.state.clicks);
    let clicks = {itemId: this.props.id, clicks: this.state.clicks}
    axios.post('/items',clicks )
  };

  updatePlusClick(event) {
    this.setState({
      clicks: event + 1
    })
  }

  render() {
    let image = <img src="/images/tick.png" onClick={this.notifyServer.bind(this)} alt="Tick" height="20" width="20"/>
    if (this.props.search === "yes") {
      let searchQuery = this.props.text.split(" ").join("+")
      let searchURL = "http://stackoverflow.com/search?q=" + searchQuery
      let searchLink = <a href={ searchURL } target="_blank"><img src="/images/so-icon.png" alt="SOSearch" height="20" width="20"/></a>
      return <li className="item" >
        <div className="itemText">
          {this.props.text}
          </div>
        <div className="itemImages">
          {image}{this.state.clicks}{searchLink}
        </div>
      </li>
    } else {
      return <li className="item" >
        <div className="itemText">
          {this.props.text}
          </div>
        <div className="itemImages">
          {image}{this.state.clicks}
        </div>
      </li>
    }
  }
};

export default Item;
