import React, { Component } from 'react';
import io from 'socket.io-client';
import UserList from './UserList';
import selectRandomElement from '../helpers/selectRandomElement';

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = { userCount: 1,
                  socketId: '',
                  userNames: {},

                  randomColors: ["blue", "green", "black", "red"],
                  randomNames: ["Dines", "Amanda", "Kim", "Tudor"],
                  randomFonts: ["'Gloria Hallelujah', cursive", "'Coming Soon', cursive", "'Gochi Hand', cursive",
                                "'Annie Use Your Telescope', cursive", "'Just Me Again Down Here', cursive"]};

		this.updateUserCount = this.updateUserCount.bind(this);
		this.updateUserNames = this.updateUserNames.bind(this);
		this.updateName = this.updateName.bind(this);
    this.setUserProperties = this.setUserProperties.bind(this);
    this.setUserStyle = this.setUserStyle.bind(this);

  }

  componentDidMount () {
    let boardId = window.location.pathname.split('/')[2]
    this.socket = io('/');
    this.socket.on('connect', () => {

    this.setUserProperties(this.socket.id,
                           this.state.randomNames[Math.floor(Math.random()*this.state.randomNames.length)],
                           this.state.randomColors[Math.floor(Math.random()*this.state.randomColors.length)],
                           this.state.randomFonts[Math.floor(Math.random()*this.state.randomFonts.length)]);
    document.getElementById("name-input").placeholder = this.state.userNames[this.socket.id]['name'];
    this.setState({
      userNames: this.state.userNames
    })
    this.setUserStyle(this.state.userNames)

    this.socket.emit('room', {boardId: boardId,
                              name: this.state.userNames[this.socket.id]['name'],
                              socketId: this.socket.id,
                              color: this.state.userNames[this.socket.id]['color'],
                              font: this.state.userNames[this.socket.id]['font']});
    });
    this.socket.on('entered', (data) => {
      this.setUserProperties(data.socketId, data.name, data.color, data.font)
      this.updateUserNames();
      this.updateUserCount(data.users);
    });

    this.socket.on('leave', (data) => {
      this.updateUserCount(data.users);
      delete this.state.userNames[data.socket];
      this.socket.emit("new user", {room: boardId, userNames: this.state.userNames});
    });
    this.socket.on('update names', (data) => {
      this.state.userNames[data.socket]['name'] = data.name;
      this.setState({
        userNames: this.state.userNames
      });
    });

    this.socket.on('update users', (data) => {
        this.setState({
          userNames: data.userNames
        })
        this.setUserStyle(this.state.userNames)
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


  setUserProperties(socketId, name, color, font) {
    this.state.userNames[socketId] = {name: name, color: color, font: font };
  }

  setUserStyle(userNames) {
    for (let socket in userNames) {
      document.getElementById(socket).style.color = userNames[socket]['color'];
      document.getElementById(socket).style.fontFamily = userNames[socket]['font'];
    }

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
