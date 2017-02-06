import React, { Component } from 'react';
import io from 'socket.io-client';
import UserList from './UserList';

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = { userCount: 1,
                  socketId: '',
                  userNames: {}};
		this.updateUserCount = this.updateUserCount.bind(this);
		this.updateUserNames = this.updateUserNames.bind(this);
		this.updateName = this.updateName.bind(this);
  }

  componentDidMount () {
    let boardId = window.location.pathname.split('/')[2]
    this.socket = io('/');
    this.socket.on('connect', () => {
    this.socket.emit('room', {boardId: boardId});
    });
    this.socket.on('enter', (data) => {
      this.updateUserCount(data.users);
      this.updateUserNames();
    });
    this.socket.on('leave', (data) => {
      this.updateUserCount(data.users);
      delete this.state.userNames[data.socket];
      this.updateUserNames();
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
    if(Object.keys(this.state.userNames).length !== 0) {
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
        <p>{this.state.userCount} users connected.</p>
        <UserList userNames={this.state.userNames}/>
        <input type="text" ref="name" onChange={this.updateName}/>
      </div>
    )
  }
};

export default UserInfo;
