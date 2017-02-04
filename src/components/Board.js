import React, { Component } from 'react';
import Column from './Column'

class Board extends Component {

  constructor(props) {
    super(props)
    this.state = { id: "" };
  }

  componentDidMount() {
    let boardId = window.location.pathname.split('/')[2]
    this.setState({
      id: boardId
    });
  }
  
  render(){
    let columns = this.props.titles.map((text, index) => {
    	return (
    		<Column title={text} key={index} id={this.state.id + String(index)} />
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
