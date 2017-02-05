import React, { Component } from 'react';
import axios from 'axios';
import randomizeId from '../helpers/randomizeID'

class Button extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this)
	};

	handleClick(event){
		let url = this.props.route
		axios.post(url)
		.then(res =>{
			let id = String(res.data._id);
			window.location.href = window.location.href + url + '/' + randomizeId(id).substring(-1,7);
		});
		event.preventDefault();
	};
	render() {
		return <a onClick={this.handleClick} href={ this.props.route } className="homepageButton">{ this.props.name }</a>
	}
}

export default Button;
