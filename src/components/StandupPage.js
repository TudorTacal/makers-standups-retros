import React, { Component } from 'react';
import Layout from './Layout';
import Board from '../Board';

class StandupPage extends Component {
  render () {
    return (
      <div className="standupPageContent">
        <div className="logo">
          <Layout />
        </div>
        <div className="standupBoard">
          <Board />
        </div>
      </div>
    )
  }
}

export default StandupPage
