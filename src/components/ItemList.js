import React, { Component } from 'react';
import Item from './Item';
import io  from 'socket.io-client';

class ItemList extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [{text: "I am the first item"}, {text: "I am the second item"}], value: '' };
		this.notifyServer = this.notifyServer.bind(this);
		this.updateList = this.updateList.bind(this);
	}

	componentDidMount () {
		this.socket = io('/');
		this.socket.on('update list', data => {
			this.updateList(data);
		});
	}

	notifyServer(event) {
		event.preventDefault();
		let comment = this.refs.comment.value;
		socket.emit('comment event', { column: this.props.id, value: comment })
	}

	updateList(newComment){
		this.setState({
			data: ({text: newComment.value})
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
				<ul className="list">
					{ items }
				</ul>
				<div>
					<form onSubmit={this.notifyServer.bind(this)}>
					<input type="text" ref="comment" />
					<input type="submit" value="Add" />
					</form>
				</div>
			</div>
		);
	}
}

export default ItemList;
