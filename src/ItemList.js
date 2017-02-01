import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [{text: "I am the first item"}, {text: "I am the second item"}] };
	}

	render() {
		let items = this.state.data.map((item, index) => {
			return (
				<Item text={item.text} key={index}>
					{ item.text }
				</Item>
			)
		})
		return (
			<ul>
				{ items }
			</ul>
		);
	}
}

export default ItemList;
