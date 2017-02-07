import React, { Component } from 'react';

import io  from 'socket.io-client';

class UserList extends Component {
	constructor(props) {
		super(props);
    this.state = { userNames: []}
	}

  componentWillReceiveProps(nextProps) {
    if(nextProps.userNames !== undefined){
      let names = new Array();
      for (let key in nextProps.userNames) {
        names.push([key, nextProps.userNames[key]['name']]);
      }
      this.setState({
        userNames: names
      })
    }
  }

	render() {
		let userList = [];
    let i = 0;
    if(this.state.userNames.length !== 0){
      for(i = 0; i < this.state.userNames.length; i += 1){
        userList.push(<li id={this.state.userNames[i][0]} key={i}>{this.state.userNames[i][1]}</li>);
      }
    }
		return (
			<div>
				<ul id="userList">
          {userList}
				</ul>
			</div>
		);
	}
}

export default UserList;
