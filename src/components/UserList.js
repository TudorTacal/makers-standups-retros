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
        names.push(nextProps.userNames[key]);
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
        userList.push(<li key={i}>{this.state.userNames[i]}</li>);
      }
    }
		return (
			<div>
				<ul>
          {userList}
				</ul>
			</div>
		);
	}
}

export default UserList;
