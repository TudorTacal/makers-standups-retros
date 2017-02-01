import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [{text: "I am the first item"}, {text: "I am the second item"}], value: '' };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

		handleSubmit(event) {
			event.preventDefault();
			let comment = this.refs.comment.value;
			this.setState({
				data: this.state.data.concat({text: comment})
			});
			this.refs.comment.value = "";
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
			<div>
				<ul>
					{ items }
				</ul>
				<div>
					<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref="comment" />
					<input type="submit" value="Add" />
					</form>
				</div>
			</div>
		);
	}
}

export default ItemList;
