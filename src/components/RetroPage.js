import React, { Component } from 'react';
import Layout from './Layout';
import Board from './Board';
import UserInfo from './UserInfo';
import Chat from './Chat';

class RetroPage extends Component {
  render () {

    let titles = ["Successes", "Struggles", "Suggestions", "Actions"]

    return (
      <div className="overallContainer">
        <Layout />
        <div className="boardContainer">
          <div className="board">
            <Board titles={ titles } type="retro" />
          </div>
          <div className="sideBar">
            <div className="userInfo">
              <UserInfo />
            </div>
            <div className="chat">
              <Chat/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RetroPage
