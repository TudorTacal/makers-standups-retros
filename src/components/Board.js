import React, { Component } from 'react';
import Column from './Column'

class Board extends Component {
  render(){
    let columns = this.props.titles.map((text, index) => {
    	return (
    		<Column title={text} key={index} />
    	)
    })

    return (
      <div className="whiteBoard">
      	{ columns }
      </div>
    )
  };
};

export default Board;
