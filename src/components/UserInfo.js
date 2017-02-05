import React, { Component } from 'react';
import io from 'socket.io-client';

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = { userCount: 1, id: ''};
		this.updateUserCount = this.updateUserCount.bind(this);
  }

  componentDidMount () {
    let boardId = window.location.pathname.split('/')[2]
    this.socket = io('/');
    this.socket.on('connect', () => {
    this.socket.emit('room', boardId);
    });
    this.socket.on('enter', (data) => {
      this.updateUserCount(data.users)
    });
    this.socket.on('leave', (data) => {
      this.updateUserCount(data.users);
    });
  }

  updateUserCount(count){
    this.setState({
      userCount: count
    });
	}

  render() {
    return (
      <div>
        <p>{this.state.userCount}</p>
      </div>
    )
  }
};

export default UserInfo;
