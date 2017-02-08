import React, { Component } from 'react';
import Item from './Item';
import io  from 'socket.io-client';
import axios from 'axios'

class ItemList extends Component {

	constructor(props) {
		super(props);
		this.state = { data: [], user: 'string'};
		this.notifyServer = this.notifyServer.bind(this);
		this.updateList = this.updateList.bind(this);
		this.axiosGet = this.axiosGet.bind(this);
		this._updateListSocket = this._updateListSocket.bind(this);

	}

	componentDidMount () {
		this._updateListSocket();
		this.axiosGet();
	}

	_updateListSocket(){
		this.socket = io('/');
		this.socket.on('update list', data => {
			if (data.itemList === this.props.id) {
				this.updateList(data.text, data.userId, data.userFont, data.userColor);
			}
		});
	}

	axiosGet(){
		var _this = this
		axios.get('/items').then(res =>{
			res.data.forEach(function(entry){
				if (entry.listId === _this.props.id) _this.updateList(entry.text, entry.userId, entry.font, entry.color)
			})
		});
	}
	notifyServer(event) {
		event.preventDefault();
		this.state.user = document.getElementById("name-input").getAttribute("user");
		let names = document.getElementById("userList").children
		console.log(names);
		let itemColor = "";
		let itemFont = "";
		for(let i = 0; i < names.length; i += 1){
			if(names[i].id == this.state.user){
				itemColor = names[i].style.color;
				itemFont =  names[i].style.fontFamily;
			}
		}

		let comment = this.refs.comment.value;
		let item = {text: comment, listId: this.props.id, userId: this.state.user, userFont: itemFont, userColor: itemColor}
		axios.post('/items', item)
		this.updateList(comment, this.state.user, itemFont, itemColor);
		if (comment.trim() === '') return;
		this.socket.emit('comment event', {itemList: this.props.id, text: comment, userId: this.state.user, userFont: itemFont, userColor: itemColor});
		this.refs.comment.value = "";

	}

	updateList(text, userId, userFont, userColor ){

		this.setState({
			data: this.state.data.concat({text: text, userId: userId, userFont: userFont, userColor: userColor })
		});
	}

	render() {
		let items = this.state.data.map((item, index) => {
			if (this.props.title === "Blocks") {
				return (
					<Item font={item.userFont} color={item.userColor} userId={item.userId} id={this.props.id + String(index)} text={ item.text } key={ index } search="yes">
						{ item.text }
					</Item>
				)
			} else {
				return (
					<Item font={item.userFont} color={item.userColor} userId={item.userId} id={this.props.id + String(index)} text={ item.text } key={ index } search="no">
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
					<input type="text" maxLength="35" ref="comment" required={true}/>
					<input className="submitButton" type="submit" value="+" />
					</form>
				</div>
			</div>
		);
	}
}

export default ItemList;
