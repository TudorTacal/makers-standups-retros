import React, { Component } from 'react';
import ItemList from './ItemList';

class Column extends Component {

	render() {
		return (
			<div className="column">
				<h1>{ this.props.title }</h1>
				<ItemList id={this.props.id} title={this.props.title}/>
			</div>
		);
	}
}

export default Column;
