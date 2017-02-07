import React, { Component } from 'react';
import Layout from './Layout';
import Board from './Board';
import UserInfo from './UserInfo';

class StandupPage extends Component {
  render () {

    let titles = ["I learned", "I want to learn", "I am blocked"]

    return (
      <div className="overallContainer">
      <Layout />
      <div className="boardContainer">
        <div className="board">
          <Board titles={ titles } />
        </div>
        <div className="userInfo">
          <UserInfo />
        </div>
      </div>
      </div>
    )
  }
}

export default StandupPage
