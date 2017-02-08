import React, { Component } from 'react';
import Layout from './Layout';
import Board from './Board';
import UserInfo from './UserInfo';
import Chat from './Chat';

class StandupPage extends Component {
  render () {

    let titles = ["Learnt", "To Learn", "Blocks"]

    return (
      <div>
        <div className="standupPageContent">
          <div className="logo">
            <Layout />
          </div>
          <div className="standupBoard">
            <Board titles={ titles } />
          </div>
          <div>
            <Chat/>
          </div>
        </div>
        <div className="userInfo">
          <UserInfo />
        </div>
      </div>
    )
  }
}

export default StandupPage
