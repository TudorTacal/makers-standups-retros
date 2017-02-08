import React, { Component } from 'react';
import io from 'socket.io-client';
import Message from './Message.js'


class Chat extends Component {

	constructor(props) {
		super(props);
		this.state = { messages: [], user: "string", boardId: "string"};
	    this.notifyServer = this.notifyServer.bind(this);
	    this.updateChat = this.updateChat.bind(this);
	}

	componentDidMount () {
		let boardId = window.location.pathname.split("/")[2];
		this.state.boardId = boardId
		this.socket = io('/');
    	this.socket.on('update chat', data => {
			console.log(data.boardId);
			console.log(this.state.boardId);
			if (data.boardId === this.state.boardId) {
				this.updateChat(data.text, data.userName);
			}
   		})
	}

	notifyServer(event) {
		event.preventDefault();
		let userSocket = this.state.user = document.getElementById("name-input").getAttribute("user");
		console.log(userSocket);
    	this.state.user = document.getElementById(userSocket).innerHTML;
			let chat = this.refs.message.value
			this.refs.message.value = "";
		this.socket.emit("new chat", {text: chat, boardId: this.state.boardId, userName: this.state.user});
	}

	updateChat(text, userName){
		this.setState({
			messages: this.state.messages.concat({text: text, userName: userName})
		});
	}


	render() {
      let messages = this.state.messages.map((item, index) => {
        return(
          <Message key={index} text={item.text} userName={item.userName}>
          </Message >
        )
      })
		return (
			<div>
				<ul className="messageList">
					{ messages }
				</ul>
				<div className="chatForm">
					<form onSubmit={this.notifyServer}>
					<input type="text" maxLength="140" ref="message" required={true}/>
					<input type="submit" className="submitButton" value="+" />
					</form>
				</div>
			</div>
		);
	}
}

export default Chat;
