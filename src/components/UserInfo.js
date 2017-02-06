import React, { Component } from 'react';
import io from 'socket.io-client';
import UserList from './UserList';

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = { userCount: 1,
                  socketId: '',
                  userNames: {},
                  randomNames: ["Dines", "Amanda", "Kim", "Tudor"],
                  };
		this.updateUserCount = this.updateUserCount.bind(this);
		this.updateUserNames = this.updateUserNames.bind(this);
		this.updateName = this.updateName.bind(this);
  }

  componentDidMount () {
    let boardId = window.location.pathname.split('/')[2]
    this.socket = io('/');

    this.socket.on('connect', () => {
    this.state.userNames[this.socket.id] = this.state.randomNames[Math.floor(Math.random()*this.state.randomNames.length)];
    document.getElementById("name-input").placeholder = this.state.userNames[this.socket.id];
    this.socket.emit('room', {boardId: boardId,
                              name: this.state.userNames[this.socket.id],
                              socketId: this.socket.id});
    });
    this.socket.on('entered', (data) => {
      this.state.userNames[data.socketId] = data.name;
      this.updateUserNames();
      this.updateUserCount(data.users);

    });

    this.socket.on('leave', (data) => {
      console.log(data);
      this.updateUserCount(data.users);
      delete this.state.userNames[data.socket];
      this.socket.emit("new user", {room: boardId, userNames: this.state.userNames});
    });
    this.socket.on('update names', (data) => {
      this.state.userNames[data.socket] = data.name;
      this.setState({
        userNames: this.state.userNames
      });
    });

    this.socket.on('update users', (data) => {
        this.setState({
          userNames: data.userNames
        })
    });
  }

  updateUserCount(count){
    this.setState({
      userCount: count
    });
	}

  updateUserNames(){
    let boardId = window.location.pathname.split('/')[2];
    if(Object.keys(this.state.userNames).length > 1) {
      this.socket.emit("new user", {room: boardId, userNames: this.state.userNames})
    }
  }

  updateName(){
    this.setState({
      socketId: this.socket.id
    });
    let boardId = window.location.pathname.split('/')[2]
    this.socket.emit("name", {room: boardId, name: this.refs.name.value})
  }

  render() {

    return (
      <div>
        <p>Add your name below...</p>
        <input id="name-input" type="text" ref="name" onChange={this.updateName}/>
        <p>{this.state.userCount} users connected.</p>
        <UserList userNames={this.state.userNames}/>
      </div>
    )
  }
};

export default UserInfo;
