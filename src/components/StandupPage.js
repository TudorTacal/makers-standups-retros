import React, { Component } from 'react';
import Layout from './Layout';
import Board from './Board';
import UserInfo from './UserInfo';
import Chat from './Chat';

class StandupPage extends Component {
  render () {

    let titles = ["Learnt", "To Learn", "Blocks"]

    return (

      <div className="overallContainer">
        <Layout />
        <div className="boardContainer">
          <div className="board standup-board">
            <Board titles={ titles } type="standup" />
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

export default StandupPage
