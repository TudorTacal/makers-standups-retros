import React, { Component } from 'react';
import io from 'socket.io-client';
import Message from './Message.js'


class Chat extends Component {

	constructor(props) {
		super(props);
		this.state = { messages: [{text: "I am the first item", userName: "Test name"}], user: "string"};
    this.notifyServer = this.notifyServer.bind(this);
	}

	componentDidMount () {
		this.socket = io('/');
    this.socket.on('update chat', data => {
    console.log(data);

    })
  }

	notifyServer(event) {
		event.preventDefault();
    this.state.user = document.getElementById("userList").children[document.getElementById("userList").children.length-1].innerHTML;
    this.setState({
      messages: this.state.messages.concat({text: this.refs.message.value, userName: this.state.user})
    })
    let boardId = window.location.pathname.split("/")[2];
    this.socket.emit("new chat", {messsages: this.state.messages, boardId: boardId, text: this.refs.message.value, userName: this.state.user});
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
				<div>
					<form onSubmit={this.notifyServer}>
					<input type="text" maxLength="140" ref="message" required={true}/>
					<input type="submit" value="Add" />
					</form>
				</div>
			</div>
		);
	}
}

export default Chat;
