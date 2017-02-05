import React, { Component } from 'react';
import Item from './Item';
import io  from 'socket.io-client';

class ItemList extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
		this.notifyServer = this.notifyServer.bind(this);
		this.updateList = this.updateList.bind(this);
	}

	componentDidMount () {
		this.socket = io('/');
		this.socket.on('update list', data => {
			if (data.itemList === this.props.id) {
				this.updateList(data.text);
			}
		});
	}

	notifyServer(event) {
		event.preventDefault();
		let comment = this.refs.comment.value;
		if (comment.trim() === '') return;
		this.socket.emit('comment event', {itemList: this.props.id, text: comment});
		this.refs.comment.value = "";
		this.updateList(comment);
	}

	updateList(newItem){
		this.setState({
			data: this.state.data.concat({text: newItem})
		});
	}

	render() {
		let items = this.state.data.map((item, index) => {
			return (
				<Item id={this.props.id + String(index)} text={item.text} key={index}>
					{ item.text }
				</Item>
			)
		})
		return (
			<div>
				<ul className="list">
					{ items }
				</ul>
				<div>
					<form onSubmit={this.notifyServer.bind(this)}>
					<input type="text" maxLength="50" ref="comment" />
					<input type="submit" value="Add" />
					</form>
				</div>
			</div>
		);
	}
}

export default ItemList;
