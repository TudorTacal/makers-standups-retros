import React, { Component } from 'react';
import io from 'socket.io-client';
import axios from 'axios'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicks: 0
    };
    this._updatePlusClick = this._updatePlusClick.bind(this);
    this.notifyServer = this.notifyServer.bind(this);
    this._axiosGet = this._axiosGet.bind(this);
    this._setItemStyles = this._setItemStyles.bind(this);
    this.updateCounterSocket = this.updateCounterSocket.bind(this)
  }

  componentDidMount(){
    this.updateCounterSocket()
    this._axiosGet();
    this._setItemStyles();
  };

  updateCounterSocket() {
    this.socket = io('/');
    this.socket.on('update counter', data => {
      if (data.item === this.props.id) this._updatePlusClick(this.state.clicks);
    });
  }

  _setItemStyles(){
    let items = document.getElementsByClassName(this.props.userId)
    for(let i = 0; i < items.length; i += 1){
      items[i].style.color = this.props.color;
      items[i].style.fontFamily = this.props.font;
    }
  }

  _axiosGet() {
    var _this = this
    axios.get('/items').then(res =>{
      res.data.forEach(function(item){
        if (item.itemId === _this.props.id) _this._updatePlusClick(item.clicks)
      })
    });
  }

  notifyServer(){
    this.socket.emit('counter event', { item: this.props.id });
    this._updatePlusClick(this.state.clicks);
    let clicks = {itemId: this.props.id, clicks: this.state.clicks}
    axios.post('/items',clicks )
  };

  _updatePlusClick(event) {
    this.setState({
      clicks: event + 1
    })
  }

  render() {
    let image = <img className="tickImage" src="/images/tick.png" onClick={this.notifyServer.bind(this)} alt="Tick" height="20" width="20"/>
      if(this.props.search === "yes") {
        var searchQuery = this.props.text.split(" ").join("+")
        var searchURL   = "http://stackoverflow.com/search?q=" + searchQuery
        var searchLink  = <a href={ searchURL } target="_blank"><img src="/images/so-icon.png" alt="SOSearch" height="20" width="20"/></a>
    }
      return (
        <li className={"item " + this.props.userId}>
          <div className="itemText">
            {this.props.text}
          </div>
          {this.props.search === "yes" ? (
            <div className="itemImages">
              {image}{this.state.clicks}{searchLink}
            </div>
          ) : (
            <div className="itemImages">
              {image}{this.state.clicks}
            </div>
          )}
        </li>
      )
  }
};

export default Item;
