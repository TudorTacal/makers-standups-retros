import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
	render() {
		let items = this.props.data.map((item, index) => {
			return (

				<Item text={item.text} key={index}>
					{	item.text }
				</Item>
			)
		})

		return (
			<ul>
				{items}
			</ul>
		);
	}
}

export default ItemList;
