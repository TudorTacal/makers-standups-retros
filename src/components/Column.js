import React, { Component } from 'react';
import ItemList from './ItemList';

class Column extends Component {
	constructor(props) {
    	super(props)
	}

	render() {
		return (
			<div className={"column-" + this.props.type}>
				<h1>{ this.props.title }</h1>
				<ItemList id={this.props.id} title={this.props.title}/>
			</div>
		);
	}
}

export default Column;
