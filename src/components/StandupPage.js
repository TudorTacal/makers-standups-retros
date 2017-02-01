import React, { Component } from 'react';
import Layout from './Layout';
import Board from '../Board';

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
        </div>
      </div>
    )
  }
}

export default StandupPage
