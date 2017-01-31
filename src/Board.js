import React, { Component } from 'react';
import Column from './Column'

class Board extends Component {
  render(){
    return (
      <div className="whiteBoard">
				<Column title="I learned" />
				<Column title="I want to learn"/>
				<Column title="I am blocked"/>
      </div>
    )
  };
};

export default Board;
