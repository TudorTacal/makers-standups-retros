import React, { Component } from 'react';
import Layout from './Layout';
import Board from './Board';
import UserInfo from './UserInfo';

class StandupPage extends Component {
  render () {

    let titles = ["I learned", "I want to learn", "I am blocked"]

    return (
      <div className="standupPageContent">
        <div className="logo">
          <Layout />
        </div>
        <div className="standupBoard">
          <Board titles={ titles } />
          <UserInfo />
        </div>
      </div>
    )
  }
}

export default StandupPage
