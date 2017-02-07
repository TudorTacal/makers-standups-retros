import React, { Component } from 'react';
import Item from './Item';
import io  from 'socket.io-client';
import axios from 'axios'

class ItemList extends Component {

	constructor(props) {
		super(props);
		this.state = { data: [{text: "I am the first item"}, {text: "I am the second item"}]};
		this.notifyServer = this.notifyServer.bind(this);
		this.updateList = this.updateList.bind(this);
		this.axiosGet = this.axiosGet.bind(this);

	}

	componentDidMount () {
		var _this = this;
		this.socket = io('/');
		this.socket.on('update list', data => {
			if (data.itemList === this.props.id) {
				this.updateList(data.text);
			}
		});
		this.axiosGet();
	}

	axiosGet(){
		var _this = this
		axios.get('/items').then(res =>{
			res.data.forEach(function(entry){
				if (entry.listId === _this.props.id) _this.updateList(entry.text)
			})
		});
	}
	notifyServer(event) {
		event.preventDefault();
		let comment = this.refs.comment.value;
		let item = {text: comment, listId: this.props.id}
		axios.post('/items', item)
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
			if (this.props.title === "I am blocked") {
				return (
					<Item id={this.props.id + String(index)} text={ item.text } key={ index } search="yes">
						{ item.text }
					</Item>
				)
			} else {
				return (
					<Item id={this.props.id + String(index)} text={ item.text } key={ index } search="no">
						{ item.text }
					</Item>
				)
			}
		})
		return (
			<div>
				<ul className="list">
					{ items }
				</ul>
				<div>
					<form onSubmit={this.notifyServer.bind(this)}>
					<input type="text" maxLength="50" ref="comment" required={true}/>
					<input type="submit" value="Add" />
					</form>
				</div>
			</div>
		);
	}
}

export default ItemList;
