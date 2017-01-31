import React, { Component } from 'react';
import ItemList from './ItemList';

class Column extends Component {
	render() {
		return (
			<div className="column">
				<h1>{ this.props.title }</h1> 
				<div className="column-content">
					<ItemList />
				</div>
			</div>
		)
	}
}

export default Column;