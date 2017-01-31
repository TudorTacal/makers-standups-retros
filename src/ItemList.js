import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {

	render() {

		return (
			<ul>
				<li><Item text={this.props.text}/></li>
			</ul>
		);
	}
}

export default ItemList;